/////////////////////
actualizar npm que sea mayor a 7.9


-Ubicarse en la carpeta principal Agora
-npm install (Esto instala los paquetes de api y client)

-ingresar a carpeta api 
-npm run dev para  probar que el back funciona
- Ctrl + C para cerrar servidor de api

-ingresar a carpeta client
- npm start para probar que funciona
- Ctrl + C para cerrar servidor de client


-volver a carpeta principal Agora
-npm run start  ejecuta un servidor que levanta tanto api como client


/////nota


no es necesario trabajar desde la carpeta principal cada grupo puede trabajar en la carpeta client o api segun sus requerimientos


//RUTAS DEL FRONT

LOGIN

/// http://localhost:3000/login

REGISTRO

/// http://localhost:3000/register

OLVIDAR CONTRASEÑA

/// http://localhost:3000/forgot_password

CAMBIAR CONTRASEÑA

/// http://localhost:3000/user/activate/reset_password/:activation_token