//      import controllers
import { userController } from '../js/user_controller.js';

var userDataInitializer = {
    userCardInit: async function () {
        try {
            const userId = "55136"
            const user = await userController.getUserById_2(userId);

            console.log(user)

            const nameElement = document.querySelector('.info_alignment:nth-child(1) p:nth-child(2)');
            const lastNameElement = document.querySelector('.info_alignment:nth-child(2) p:nth-child(2)');
            const emailElement = document.querySelector('.info_alignment:nth-child(3) p:nth-child(2)');
            const phoneElement = document.querySelector('.info_alignment:nth-child(4) p:nth-child(2)');
            const aboutElement = document.querySelector('.about_me .about_text');

            // Update the content with user data
            nameElement.textContent = user.fName;
            lastNameElement.textContent = user.lName;
            emailElement.textContent = user.email;
            phoneElement.textContent = user.phone;
            aboutElement.textContent = user.aboutMe;

        } catch (error) {
            console.error('Error fetching user data:', error);
            // Handle the error here (e.g., show an error message)
            return null;
        }
    }
}

export { userDataInitializer }
