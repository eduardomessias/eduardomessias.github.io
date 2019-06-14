Find the employee type -> hcmWorker.workerRelationType();
Automatically associate a worker to a vendor -> TrvPartyEmployeeRelationship::findOrCreatePartyEmployeeRelationShip(TrvPartyEmployeeRelationship.AccountType, workerRecId, vendorDimension);
