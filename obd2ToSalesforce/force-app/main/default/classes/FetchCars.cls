public with sharing class FetchCars {
    @AuraEnabled
    public static Car__c getCarsFromUser() {
        try {
            //Returns the cars from a given user's id (Just querying all cars for now)
            return [SELECT Id, Name FROM Car__c];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
