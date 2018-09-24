##Detalles del proceso de desarrollo de la aplicacion
###Front
1. Agregar utilidades de estilos / javascript
Incluimos bootstrap y jquery en el proyecto. Para ello lo incluimos en el layout, los css en head y los js en body:

    link(rel='stylesheet', href='/stylesheets/bootstrap.css')

    script(src='/javascripts/jquery.min.js')
    script(src='/javascripts/bootstrap.min.js')

###Back
1. Incluimos cookie-session para trabajar el login con cookies
    npm install cookie-session
