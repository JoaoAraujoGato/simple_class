export const calculateAge = (userBirth) => {
    if(userBirth){

        let year  = userBirth.split('T')[0].split('-')[0];
        let month = userBirth.split('T')[0].split('-')[1];
        let day   = userBirth.split('T')[0].split('-')[2];    
        var currentDate = new Date();
        var currentYear = currentDate.getFullYear();
        var birthdayThisYear = new Date(day, month, year);
        var age = currentYear - year;
        
        if(birthdayThisYear > currentDate) {
            
            age--;
        } 
        return age;
    }
}