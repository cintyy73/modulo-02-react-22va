# ejercitación

1. Crea un context para manejar la autenticación en una aplicación.
2. El context debe tener un estado para el usuario autenticado.
3. un método para iniciar sesión
4. otro método para cerrar sesión.

El form validado con react hook form

---

**Consigna del ejercicio 2:** Crear y manejar un modal utilizando un Custom Hook.

**Objetivo principal:**
1. Crear un custom hook (`useModal`) que gestione el estado de un modal (abierto o cerrado).
2. Usar este hook en un componente para abrir, cerrar o alternar la visibilidad de un modal.

**Pasos del ejercicio:**

**Paso 1: Crear el custom hook `useModal`:**
- Usa `useState` para manejar el estado del modal (`isOpen`).
- Define funciones:
  - `openModal`: Abre el modal configurando el estado a `true`.
  - `closeModal`: Cierra el modal configurando el estado a `false`.
  - `toggleModal`: Alterna el estado del modal entre abierto y cerrado.
- Retorna el estado (`isOpen`) y las funciones (`openModal`, `closeModal`, `toggleModal`) para que puedan ser usadas en otros componentes.

**Paso 2: Implementar el hook en un componente que utilice un modal:**
- Usa las funciones proporcionadas por el hook (`openModal`, `closeModal`, `toggleModal`) para controlar el modal.
- Implementa un botón que llame a `openModal` para abrir el modal.
- Usa un modal de Chakra UI o cualquier otra biblioteca para renderizar el modal.

**Requisitos del componente:**
1. Un botón que llame a `openModal` para abrir el modal.
2. El modal debe:
   - Mostrar un título (en `ModalHeader`).
   - Contener un cuerpo con contenido (en `ModalBody`).
   - Tener un pie de página con un botón para cerrarlo (en `ModalFooter`).
3. Implementar `closeModal` en el botón de cierre del modal y en el evento `onClose`.

--- 

