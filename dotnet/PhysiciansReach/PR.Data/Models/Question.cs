﻿using System;
using System.Collections.Generic;

namespace PR.Data.Models
{
    public class Question
    {
        public int QuestionId { get; set; }

        public int IntakeFormId { get; set; }

        public string Text { get; set; }

        public List<Answer> Answers { get; set; }

        public IntakeForm IntakeForm { get; set; }

        public DateTime CreatedOn { get; set; }

        public DateTime ModifiedOn { get; set; }
    }
}