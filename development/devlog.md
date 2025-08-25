# NG #
- Comandos basicos
    - ng serve
    - ng generate component

<br>

# Angular #
- Components
    - Children - X
    - Props - X
    - Eventos - X
- Layouts
- Diseño Landing Page

## Conexion Angular - Backend ##
- Request simple por API al backend
- Routes
- Forms
- CSR
- Autenticacion de Usuarios


<br>

# NET Core API #
- Conexion a Supabase mediante API
- Controller
- Model
- API Endpoint
    - Get -> Probado
    - Post -> Falta Probar

# Supabase
- JWT

# Arquitectura

FrontEnd -> NET Core API -> Supabase

- Habilitar Autenticacion mediante JWT para NET Core API
- Obtener token para frontend
- Habilitar RLS para las tablas de Supabase para que solo el servidor backend pueda insertar
            

<br><br>

## Notas

**El componente app es el primer componente a renderizarse todos los demas componentes, puede ser util para definir estilos globales o agregar referencias de elementos externos css, link, scripts**
**De acuerdo a los autores de Supabase es correcto instanciar una nueva conexion cada por cada API**