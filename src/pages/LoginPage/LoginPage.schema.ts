import { ZRegistrationData } from "../RegistrationPage/RegistrationPage.schema";

export const ZLoginData = ZRegistrationData.omit("name");