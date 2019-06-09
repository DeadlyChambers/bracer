﻿using PR.Constants.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace PR.Data.Models
{
    public class Patient
    {
        public int PatientId { get; set; }

        public int AgentId { get; set; }

        public LanguageType Language { get; set; }

        public SexType Sex { get; set; }

        public TherapyType Therapy { get; set; }

        public InsuranceType Insurance { get; set; }

        public PharmacyType Pharmacy { get; set; }

        public string FirstName { get; set; }

        public string MiddleName { get; set; }

        public string LastName { get; set; }

        public DateTime DateOfBirth { get; set; }

        public string PhoneNumber { get; set; }

        public bool CallBackImmediately { get; set; }

        public CallbackTime BestTimeToCallBack { get; set; }

        public bool IsDme { get; set; }
               
        public string Medications { get; set; }

        public string Notes { get; set; }

        public string OtherProducts { get; set; }

        [MaxLength(100)]
        public string PhysiciansName { get; set; }

        public string PhysiciansPhoneNumber { get; set; }

        public int AddressId { get; set; }

        public int? PhysiciansAddressId { get; set; }

        public DateTime CreatedOn { get; set; }

        public DateTime ModifiedOn { get; set; }

        public Address Address { get; set; }

        public Address PhysiciansAddress { get; set; }

        public List<IntakeForm> IntakeForms { get; set; }

        public Agent Agent { get; set; }

        public int? PrivateInsuranceId { get; set; }
        public PrivateInsurance PrivateInsurance { get; set; }

        public int? MedicareId { get; set; }
        public Medicare Medicare { get; set; }

        [MaxLength(3)]
        public string Waist { get; set; }
        [MaxLength(6)]
        public string Height { get; set; }
        [MaxLength(4)]
        public string ShoeSize { get; set; }
        [MaxLength(500)]
        public string Allergies { get; set; }
        [MaxLength(3)]
        public string Weight { get; set; }

    }

}
