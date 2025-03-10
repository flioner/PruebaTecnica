# Prueba Tecnica

Desarrollar una página en React (opcional Next.js) que administre información de personas físicas y morales.

## Como correr

1.- Clonar el repositorio de github
2.- Dentro del repositorio instalar las dependencias usando yarn / yarn i
3.- Correr el proyecto usando yarn run dev

## Demo en linea

Hosteado en Vercel. [capitalx.fabianlioner.com](https://capitalx.fabianlioner.com)

## Info

Front-end en **Next.js**, **Tailwind** como librería de estilos, **HeroUI** (Anteriormente NextUI) como librería de componentes, manejo de estados nativa de react **useEffect & useState** y API simulada en **localStorage**, forms con **React Hook Form**.

Desafortunadamente, HeroUI requiere de colocar un "Provider" en layout.tsx, un wrapper de {children}, el cual garantiza que HeroUI esté accesible en todas las paginas. La consecuencia de esto es que este provider y la implementación de diversos elementos como "Table" y "Modal" necesita de la flag **"use client"** para funcionar, por lo que se desaprovecha el SSR de Next.js. Dado que se está usando el cliente para el rendering de estas paginas decidí usar el manejo de estados nativo de react, con el cual estoy muy familiarizado, junto con localStorage, los cuales corren en el cliente.

Sin embargo, en caso de que quisieran una implementación que aproveche el SSR, tengo entendido que **Zustand** permite el manejo de estados sin afectar el SSR, de la misma manera usaría **ShadCN** o una librería de componentes que no necesite del cliente. Aunque este haya sido el caso, el usar el cliente me permitió usar una mock-api, la cual hace que el código tenga una estructura más parecida a la que nos encontraríamos en un proyecto ya fullstack. Ahora si el uso del cliente estuviese prohibido, o fuese esencial el mantenere el SSR, con gusto realizaría una segunda implementación con las tecnologías mencionadas arriba.

Me aseguré que la validación del RFC sucediera incrementalmente y con mensajes de error descriptivos. De la misma manera no se muestran más campos a llenar hasta que el RFC sea valido y se haya identificado a que categoría pertenece.

En cuestión de la modularidad y separación de componentes del código, la barra de navegación es su componente separado, sin embargo a través de pasarle props, se puede modificar qué tabla es la que estamos viendo, y puede controlar el modal y botón de **Agregar Usuario +**. Hay un componente base llamado **DataTable** al cual se le pasa un prop de **data** y otro de **columns** de esta manera la tabla se puede construir dinamicamente dependiendo si se necesita para una persona física o moral, de la misma manera el contenido de la tabla no está limitado a plaintext, si no que también se le puede pasar un "render" (objeto html) personalizado. De igual manera para evitar que el archivo de form se extendiera más, las reglas de validación se encuentran en un archivo separado en el mismo directorio.
