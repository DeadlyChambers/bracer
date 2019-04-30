﻿using PR.Constants.Enums;
using System;

namespace PR.Data.Models
{
    public class Document
    {
        public int DocumentId { get; set; }

        public int IntakeFormId { get; set; }

        public int PhysicianId { get; set; }

        public DocumentType Type { get; set; }

        public DocumentStatus Status { get; set; }

        public byte[] Content { get; set; }

        public byte[] Signature { get; set; }

        public DateTime CreatedOn { get; set; }

        public DateTime ModifiedOn { get; set; }

        public IntakeForm IntakeForm { get; set; }

        public Physician Physician { get; set; }
    }
}