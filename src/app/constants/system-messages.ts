export const SYSTEM_MESSAGES: Record<string, string> = {
    SignUp_SuccessTitle: 'Registro Completado',
    SignUp_SuccessMessage: 'Tu usuario ha sido creado exitosamente. Puedes regresar e ingresar con tu email y contraseña.',
    SignUp_ErrorTitle: 'No fue posible completar su registro',
    SignUp_ErrorMessage: 'Ha ocurrido un error al intentar completar el registro. Por favor intente más tarde.',
    SignUp_23505: 'El email especificado ya esta en uso',
    SignIn_401: 'El email o contraseña son incorrectos',
    SignIn_0: 'Ha ocurrido un error al intentar iniciar la sesión. Por favor intente más tarde.',
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

    return _errors;
}