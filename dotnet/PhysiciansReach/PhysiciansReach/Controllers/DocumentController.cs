﻿using Microsoft.AspNetCore.Mvc;
using PR.Business.Interfaces;
using PR.Constants.Enums;
using PR.Models;
using System;

namespace PhysiciansReach.Controllers
{
    [ApiController]
    public class DocumentController : ControllerBase
    {
        private readonly IDocumentBusiness _business;
        private readonly ILoggingBusiness _logging;

        public DocumentController(IDocumentBusiness business, ILoggingBusiness logging)
        {
            _business = business;
            _logging = logging;
        }

        [HttpGet("Document/{documentId}")]
        public ActionResult<DocumentModel> Get(int documentId)
        {
            _logging.Log(LogSeverity.Info, "Get Document");
            return _business.Get(documentId);
        }

        [HttpPost("Document")]
        public ActionResult<DocumentModel> Post([FromBody] DocumentModel document)
        {
            var documentId = _business.Create(document);

            return Ok(new { documentId });
        }

        [HttpPut("Document/{documentId}")]
        public ActionResult Put(int documentId, [FromBody] DocumentModel document)
        {
            _logging.Log(LogSeverity.Info, "Put Document");

            if (document.DocumentId != documentId)
            {
                throw new Exception("Invalid Request.");
            }

            _business.Update(document);

            return Ok();
        }

        [HttpGet("Document/{documentId}/Download")]
        public FileResult Download(int documentId)
        {
            _logging.Log(LogSeverity.Info, $"Get Document {documentId}");

            DocumentModel document = _business.Get(documentId);

            if (document == null)
            {
                throw new Exception("Document Not Found");
            }

            var fr = new FileContentResult(document.Content, "application/vnd.ms-word")
            {
                FileDownloadName = string.Format("Exam_{0}_{1}.docx", DateTime.Now.ToString("yyMMdd"), "Doc")
            };

            return fr;
        }
    }
}
