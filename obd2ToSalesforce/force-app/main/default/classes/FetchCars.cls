public with sharing class FetchCars {
    @AuraEnabled
    public static List<Car__c> getCarsFromUser(Id userId) {
        try {
            //Returns the cars from a given user's id (Just querying all cars for now)
            System.debug(userId);
            return [SELECT Id FROM Car__c WHERE OwnerId = :userId];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
