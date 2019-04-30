﻿using PR.Models;
using System.Collections.Generic;

namespace PR.Business.Interfaces
{
    public interface IDocumentBusiness
    {
        List<DocumentModel> GetByPhysician(int physicianId);

        DocumentModel Get(int documentId);

        DocumentModel Create(DocumentModel adminModel);

        DocumentModel Update(DocumentModel adminModel);
    }
}