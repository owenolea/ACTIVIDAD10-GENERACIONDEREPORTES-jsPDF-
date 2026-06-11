# Generador de Reportes UI - Proyecto PWD

Introducción
El objetivo de esta actividad fue desarrollar un generador de reportes dinámico utilizando HTML, CSS y JavaScript, capaz de transformar datos ingresados en una interfaz web en un documento PDF organizado y profesional. Además de cumplir con los requisitos de la consigna, se buscó crear una solución reutilizable que pueda integrarse a futuros proyectos como OTR (Observatorio de Trámites y Reclamos).

Desarrollo
Se construyó una pequeña aplicación que lee dos datos del formulario y genera un PDF usando la librería jsPDF:
- Nombre del Operador/Alumno.
- Detalle o Descripción del Registro.

El sistema valida que los campos obligatorios estén completos, diseña un encabezado colorido, ajusta el contenido automáticamente y descarga el archivo sin necesidad de backend.

Entre las funcionalidades implementadas se destacan:
- Captura dinámica de datos del formulario.
- Generación automática del PDF en el navegador.
- Encabezado visual con color y tipografía clara.
- Ajuste de texto largo mediante salto de líneas en el PDF.
- Inclusión de fecha y hora de emisión.
- Descarga automática del archivo con nombre seguro.

Implementación en OTR
Actualmente esta actividad utiliza datos simples del formulario. En el proyecto OTR, este componente podría adaptarse para generar reportes de trámites, reclamos o auditorías internas.

Los reportes podrían incluir:
- Nombre del responsable o alumno que realiza la tarea.
- Descripción de la acción técnica realizada.
- Fecha y hora de emisión del documento.
- Información adicional de seguimiento o estado.

De esta manera, el generador de PDF funcinaría como un módulo de documentación y registro, útil para certificar tareas, archivar incidentes o entregar comprobantes a usuarios.

Vínculo con el Proyecto Anual
Esta actividad se relaciona directamente con OTR porque incorpora una interfaz dinámica capaz de convertir datos de la web en un documento estático. Su implementación mejoraría la trazabilidad de los reclamos y trámites, permitiendo generar comprobantes oficiales de cada gestión.

Equipo de Desarrollo
Owen Olea – Desarrollo del formulario, programación JavaScript, diseño CSS e integración conceptual con OTR.

Stack Tecnológico
- HTML5
- CSS3
- JavaScript (ES6+)
- jsPDF

Cómo ejecutar
1. Abra `index.html` en un navegador web moderno.
2. Complete los campos: Nombre del Operador/Alumno y Detalle del Registro.
3. Haga clic en **Generar PDF**.
4. El archivo se descargará automáticamente.

Para ejecutar en un servidor local:

```bash
cd "c:\Users\Alumnos\Desktop\Nueva carpeta"
python -m http.server 8000
```

Abra luego:

```text
http://localhost:8000
```

Notas importantes
- El generador PDF se ejecuta completamente en el navegador.
- No requiere backend ni instalación de dependencias.
- El nombre del archivo se limpia para evitar caracteres inválidos.

Licencia
Licencia MIT.
