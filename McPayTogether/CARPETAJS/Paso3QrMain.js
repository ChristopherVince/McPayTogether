// Función para copiar al portapapeles con mejores mensajes de error y confirmación
function copyToClipboard() {
  const input = document.getElementById("linkInput");
  const linkText = input.value;

  if (!linkText) {
    alert("No hay enlace para copiar.");
    return;
  }

  navigator.clipboard.writeText(linkText)
    .then(() => {
      alert("¡Enlace copiado al portapapeles!");
    })
    .catch(err => {
      console.error("Error al copiar:", err);
      alert("Hubo un problema al copiar el enlace. Intenta de nuevo.");
    });
}

// Función para compartir el enlace en diferentes plataformas con manejo de errores
function compartir(app) {
  const url = document.getElementById("linkInput").value;

  if (!url) {
    alert("No hay enlace para compartir.");
    return;
  }

  let link = "";
  switch (app) {
    case "whatsapp":
      link = `https://wa.me/?text=${encodeURIComponent(url)}`;
      break;
    case "telegram":
      link = `https://t.me/share/url?url=${encodeURIComponent(url)}`;
      break;
    case "messenger":
      link = `fb-messenger://share?link=${encodeURIComponent(url)}`;
      break;
    case "instagram":
      alert("Instagram no permite compartir enlaces directamente desde páginas web. Copia el enlace manualmente.");
      return;
    default:
      alert(`Compartiendo vía ${app}: ${url}`);
      return;
  }

  try {
    window.open(link, "_blank");
  } catch (err) {
    console.error("Error al abrir el enlace para compartir:", err);
    alert("Hubo un error al intentar compartir. Intenta de nuevo.");
  }
}

// ✅ Función corregida para redirigir
function continuar() {
  const nextPage = "MenuComida10.html";

  try {
    window.location.href = nextPage;
  } catch (err) {
    console.error("Error al redirigir a la siguiente página:", err);
    alert("No se pudo cargar la siguiente página. Intenta de nuevo.");
  }
}
