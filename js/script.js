/**
 * Genera un reporte digital en formato PDF a partir de datos del formulario HTML.
 * Lenguaje de programación: JavaScript (JS) - Cliente (navegador)
 */
function descargarReporte() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: 'pt', format: 'a4' });

  const nombre = document.getElementById('inputNombre').value.trim();
  const detalle = document.getElementById('inputDetalle').value.trim();

  if (!nombre || !detalle) {
    alert('⚠️ Por favor, complete Nombre y Detalle antes de generar el PDF.');
    return;
  }

  const pageW = doc.internal.pageSize.getWidth();
  const margin = 40;

  // Header color band
  doc.setFillColor(37, 99, 235); // #2563eb
  doc.rect(0, 0, pageW, 70, 'F');

  // Header text (sin logo)
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text('REPORTE TÉCNICO OFICIAL', margin + 10, 40);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('EEST N°1 - Eduardo Ader · Vicente López', margin + 10, 56);

  // Divider
  doc.setDrawColor(230, 236, 255);
  doc.setLineWidth(0.5);
  doc.line(margin, 82, pageW - margin, 82);

  // Content labels
  doc.setTextColor(20, 29, 38);
  doc.setFontSize(12);
  let y = 110;
  const lineHeight = 18;

  doc.setFont('helvetica', 'bold');
  doc.text('Operador / Alumno:', margin, y);
  doc.setFont('helvetica', 'normal');
  doc.text(nombre, margin + 140, y);

  y += lineHeight + 6;
  doc.setFont('helvetica', 'bold');
  doc.text('Detalle del Registro:', margin, y);
  y += lineHeight;
  doc.setFont('helvetica', 'normal');

  const detalleLines = doc.splitTextToSize(detalle, pageW - margin * 2);
  doc.text(detalleLines, margin, y);

  // Fecha y hora al final
  const ahora = new Date();
  const fecha = ahora.toLocaleDateString();
  const hora = ahora.toLocaleTimeString();

  // Pie de página
  const footerY = doc.internal.pageSize.getHeight() - 40;
  doc.setFontSize(10);
  doc.setTextColor(120, 126, 145);
  doc.text(`Fecha de emisión: ${fecha}    Hora: ${hora}`, margin, footerY);
  doc.text('Documento generado automáticamente - EEST N°1 Vicente López', pageW - margin - 260, footerY);

  const safeName = nombre.replace(/[^a-zA-Z0-9_\-]/g, '_');
  doc.save(`reporte_${safeName}.pdf`);
}

function limpiarFormulario() {
  document.getElementById('inputNombre').value = '';
  document.getElementById('inputDetalle').value = '';
}

// Añadir listeners al cargar el DOM
document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('btnGenerar');
  if (btn) btn.addEventListener('click', descargarReporte);
  const btnLimpiar = document.getElementById('btnLimpiar');
  if (btnLimpiar) btnLimpiar.addEventListener('click', limpiarFormulario);
});
