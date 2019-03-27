﻿using Microsoft.AspNetCore.Mvc;
using PR.Business.Interfaces;
using PR.Data.Models;
using System.Collections.Generic;

namespace PhysiciansReach.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VendorController : ControllerBase
    {
        private readonly IVendorBusiness _business;

        public VendorController(IVendorBusiness business)
        {
            _business = business;
        }
        
        [HttpGet]
        public ActionResult<List<VendorModel>> Get()
        {
            return _business.Get();
        }

        [HttpGet("{id}")]
        public ActionResult<VendorModel> Get(int id)
        {
            return _business.Get(id);
        }

        [HttpPost]
        public ActionResult<VendorModel> Post([FromBody] VendorModel vendor)
        {
            return _business.Create(vendor);
        }

        [HttpPut("{id}")]
        public ActionResult<VendorModel> Put(int id, [FromBody] VendorModel vendor)
        {
            return _business.Update(vendor);
        }
    }
}