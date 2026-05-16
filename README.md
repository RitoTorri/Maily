# 📧 Maily - Email Service API

**Maily** es una API robusta y minimalista construida con Node.js y Express diseñada para gestionar el envío de correos electrónicos de forma eficiente. Ideal para integraciones en microservicios o sistemas de notificaciones.

## 🚀 Tecnologías

<p align="center">
    <img src="https://skillicons.dev/icons?i=javascript,express,nodejs,gmail" height="50" />
    <img src="https://cdn.simpleicons.org/swagger/85EA2D" height="50" width="50" />
</p>

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/RitoTorri/Maily

# Acceder al directorio
cd Maily

# Instalar dependencias con pnpm
pnpm install

```

## ⚙️ Configuración

1. **Variables de entorno**:
Renombra el archivo `.env.example` a `.env` y completa los valores:

| Variable | Descripción | Ejemplo |
| --- | --- | --- |
| `PORT` | Puerto donde correrá la API | `3000` |
| `EMAIL_USERNAME` | Nombre visible del remitente | `Soporte Técnico` |
| `EMAIL_SENDER` | Tu dirección de Gmail | `tuusuario@gmail.com` |
| `EMAIL_PASS` | App Password de 16 caracteres | `abcd efgh ijkl mnop` |

---

## 🔑 Cómo obtener tu `EMAIL_PASS` (Google App Password)

Para que la API envíe correos en tu nombre usando Gmail, **no debes usar tu contraseña normal**. Sigue estos pasos:

1. Ve a tu **[Cuenta de Google](https://myaccount.google.com/)**.
2. En la barra de busqueda coloca **Contraseñas de aplicaciones**
5. En "Nombre de la aplicación", escribe `Maily API` y haz clic en **Crear**.
6. Google te mostrará un código de **16 caracteres en un cuadro amarillo**.
7. Copia ese código y pégalo en tu archivo `.env` en la variable `EMAIL_PASS`.

---

## 🖥️ Ejecución Local

```bash
# Modo desarrollo (con autoreload)
pnpm dev

# Modo producción
pnpm start

```

## 📖 Documentación API

Una vez que la aplicación esté en ejecución:

* **📚 Swagger UI**: `http://localhost:3000/api-docs` (Aquí podrás probar los endpoints directamente).
* **🔗 Base URL**: `http://localhost:3000/`
* **🚀 Endpoint de Envío**: `POST http://localhost:3000/sender`

### Ejemplo de Body (JSON)

```json
{
  "to": ["ejemplo@correo.com"],
  "subject": "Bienvenida",
  "text": "<h1>¡Hola!</h1><p>Este es un correo con HTML.</p>"
}

```

---

## 🐛 Reportar errores

Si encuentras algún error o tienes sugerencias de mejora, por favor abre un **issue** en el repositorio oficial.

Desarrollado con 💻 por Jesús Cortez - Barquisimeto, Venezuela.
[Mi Github](https://github.com/RitoTorri)
[Mi Portfolio](https://cortez-porfolio.netlify.app/)