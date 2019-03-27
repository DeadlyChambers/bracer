﻿using Microsoft.EntityFrameworkCore;
using PhysiciansReach.Models;
using PR.Business.Interfaces;
using PR.Business.Mappings;
using PR.Data.Models;
using System.Collections.Generic;
using System.Linq;

namespace PR.Business
{
    public class AdminBusiness : IAdminBusiness
    {
        private DataContext _context;

        public AdminBusiness(DataContext context)
        {
            _context = context;
        }

        public List<AdminModel> Get()
        {
            return _context.Admin
                    .Include(p => p.UserAccount)
                    .Select(i => i.ToModel())
                    .ToList();
        }

        public AdminModel Get(int userAccountId)
        {
            var admin = _context.Admin
                .Include(a => a.UserAccount)
                .FirstOrDefault(u => u.UserAccountId == userAccountId);

            return admin.ToModel();
        }

        public AdminModel Create(AdminModel adminModel)
        {
            Admin admin = adminModel.ToEntity();

            _context.Admin.Add(admin);
            _context.SaveChanges();

            return admin.ToModel();
        }

        public AdminModel Update(AdminModel adminModel)
        {
            Admin admin = _context.Admin.FirstOrDefault(u => u.UserAccountId == adminModel.UserAccount.UserAccountId);

            admin = adminModel.ToEntity();
            _context.Admin.Add(admin);
            _context.SaveChanges();

            return admin.ToModel();
        }


    }
}