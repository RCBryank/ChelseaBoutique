export const SYSTEM_MESSAGES: Record<string, string> = {
    ButtonText_GoBack: 'Regresar',
    SignUp_SuccessTitle: 'Registro Completado',
    SignUp_SuccessMessage: 'Tu usuario ha sido creado exitosamente. Puedes regresar e ingresar con tu email y contraseña.',
    SignUp_ErrorTitle: 'No fue posible completar su registro',
    SignUp_ErrorMessage: 'Ha ocurrido un error al intentar completar el registro. Por favor intente más tarde.',
    SignUp_23505: 'El email especificado ya esta en uso',
    SignIn_401: 'El email o contraseña son incorrectos',
    SignIn_0: 'Ha ocurrido un error al intentar iniciar la sesión. Por favor intente más tarde.',
    Profile_Details_404Title: 'No fue posible encontrar el perfil',
    Profile_Details_404Message: 'No fue posible encontrar la información del perfil. Por favor intente más tarde.',
    Profile_Update_200Title: 'Perfil Actualizado',
    Profile_Update_200Message: 'Tu información ha sido actualizada con éxito.',
    Profile_Update_400Title: 'No fue posible actualizar tu perfil',
    Profile_Update_400Message: 'Ha ocurrido un error al intentar actualizar tu perfil. Por favor intenta más tarde.',
    Password_Update_200Title: 'Contraseña actualizada',
    Password_Update_200Message: 'Tu contraseña ha sido actualizada con éxito.',
    Password_Update_400Title: 'No fue posible actualizar tu contraseña',
    Password_Update_400Message: 'Ha ocurrido un error al intentar actualizar tu contraseña. Por favor intenta más tarde.',
    ProfileAvatar_Update_400Title: 'No fue posible actualizar el avatar',
    ProfileAvatar_Update_400Message: 'Ha ocurrido un error al intentar actualizar tu avatar. Por favor intenta más tarde.',
}

export function GetMessageErrors(_listerrors: any): string[] {
    let _errors: string[] = [];

    if (_listerrors == null || _listerrors.length <= 0)
        return _errors;

    if (_listerrors["required"])
        _errors.push("Es necesario llenar este campo.");
    if (_listerrors["minlength"])
        _errors.push("La cadena debe tener una longitud minima de " + _listerrors["minlength"].requiredLength + " caracteres.");
    if (_listerrors["email"])
        _errors.push("No se ha incluido un dominio de correo válido. Ejemplo: direccióndecorreo@email.com.");
    if (_listerrors["emailavailability"])
        _errors.push("Este correo ya esta en uso.");
    if (_listerrors["passwordmismatch"])
        _errors.push("Las contraseñas no coinciden.")
      if (_listerrors["maxFileSizeAllow"])
        _errors.push("El tamaño maximo de carga es " + _listerrors["maxKbSizeAllowed"] + " KB");

    return _errors;
}