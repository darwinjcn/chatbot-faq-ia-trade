# 🤖 Asistente Virtual FAQ - Bodegón El Buen Sabor

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![OpenRouter](https://img.shields.io/badge/OpenRouter-FF6B6B?style=for-the-badge&logo=openai&logoColor=white)
![Licencia MIT](https://img.shields.io/badge/Licencia-MIT-green.svg)

Aplicación web que integra Inteligencia Artificial (NLP) para automatizar la atención al cliente de un comercio local. Desarrollada como parte de la **Evaluación 1** de la unidad curricular de Inteligencia Artificial (UNA).

## 📸 Capturas de pantalla

**1. Interfaz inicial con identidad del negocio:**

![Interfaz inicial](docs/screenshot/01_interfaz_inicial.png)

**2. Respuestas sobre Pago Móvil y Delivery:**

![Pago Móvil y Delivery](docs/screenshot/02_pago_movil_y_delivery.png)

**3. Respuestas sobre facturación y scroll dinámico:**

![Factura y scroll](docs/screenshot/03_factura_y_scroll.png)

**4. Evidencia de costo cero (Panel de OpenRouter):**

![Gasto cero](docs/screenshot/04_openrouter_gasto_cero.png)

## ✨ Características

- **Interfaz conversacional amigable:** diseño UI/UX tipo chat con cabecera personalizada.
- **Respuestas contextualizadas:** configurado con un *System Prompt* estricto que impide inventar información.
- **Consultas soportadas:**
  - Métodos de pago (Pago Móvil, Zelle, efectivo, punto de venta).
  - Datos exactos para Pago Móvil.
  - Reglas de delivery (zonas, costo y envío gratis en pedidos mayores a $20).
  - Horarios, ubicación y facturación.
- **Scroll dinámico:** la ventana del chat mantiene un tamaño fijo con scroll interno.
- **Costo cero:** utiliza el enrutador `openrouter/free` con límite de crédito establecido en $0.00.

## 🛠️ Tecnologías utilizadas

- **HTML5 y CSS3:** estructura y diseño responsivo.
- **JavaScript (Vanilla):** lógica del cliente, manejo del DOM y peticiones `Fetch`.
- **OpenRouter API:** integración de modelos de lenguaje (LLM) gratuitos.
- **Netlify:** despliegue y hosting del sitio.

## 🚀 Ejecución local

1. Clona este repositorio o descarga los archivos.
2. Abre el archivo `script.js` y en la constante `API_KEY` coloca tu propia clave de OpenRouter (puedes obtener una gratis en [OpenRouter.ai](https://openrouter.ai)).
3. Levanta un servidor local desde la carpeta del proyecto:

```bash
python -m http.server 8080
```

4. Abre tu navegador en `http://localhost:8080`.

> **Nota:** abre el sitio a través del servidor local, no haciendo doble clic en `index.html`. Las peticiones a la API requieren un origen `http://localhost`, no el esquema `file://`.

## ⚠️ Seguridad

- La clave API no debe subirse al repositorio. Revisa que `script.js` esté cubierto por `.gitignore` antes de hacer push, o usa un archivo local que no se publique.
- Mantén el límite de crédito en **$0.00** en tu panel de OpenRouter para evitar cargos accidentales.
- Para un despliegue público, lo recomendable es ocultar la clave en el backend con **Netlify Functions** en lugar de dejarla en el JavaScript del cliente.

## 📄 Licencia

Este proyecto está bajo la [Licencia MIT](LICENSE).

## 👤 Autor

**Darwin Colmenares** - 2026