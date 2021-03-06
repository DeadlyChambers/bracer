﻿using Newtonsoft.Json;
using PR.Business.Interfaces;
using PR.Business.Mappings;
using PR.Constants.Enums;
using PR.Data.Models;
using PR.Models;
using System.Collections.Generic;
using System.Linq;

namespace PR.Business.Business
{
    public class LoginBusiness : ILoginBusiness
    {
        private DataContext _context;
        private ILoggingBusiness _logging;

        public LoginBusiness(DataContext context, ILoggingBusiness logging)
        {
            _context = context;
            _logging = logging;
        }

        public UserAccountModel Login(UserAccountModel userAccountModel)
        {
            _logging.Log(LogSeverity.Info, JsonConvert.SerializeObject(userAccountModel));

            UserAccount userAccount = userAccountModel.ToEntity();

            UserAccount user = _context.UserAccount.FirstOrDefault(u => u.UserName == userAccount.UserName && u.Active);

            if (user != null)
            {
                var hash = new PasswordHash(user.Password);

                _logging.Log(LogSeverity.Info, $"newhash: {hash}, oldhash: {userAccountModel.Password}");

                if (hash.Verify(userAccountModel.Password))
                {
                    return user.ToModel();
                }
            }

            _logging.Log(LogSeverity.Error, "Login Failed", JsonConvert.SerializeObject(userAccountModel));

            return LoginFailed();
        }

        private UserAccountModel LoginFailed()
        {
            var model = new UserAccountModel
            {
                Type = AccountType.None,
                Errors = new List<ErrorModel>
                {
                    new ErrorModel
                    {
                        StatusCode = System.Net.HttpStatusCode.UnprocessableEntity,
                        ErrorCode = "001",
                        Message = "Login Failed"
                    }
                }
            };
            return model;
        }

    }
}
