# 🎨 Paleta de Colores - Protex Innovation

**ESTADO ACTUAL**: Nueva paleta moderna y profesional implementada.

## Colores Principales

### 1. **BLUE (Azul Profesional)** - Primario
- **Hex**: `#2563EB`
- **Uso**: Elementos principales, botones primarios, fondos, iconos, navbar, links
- **Aplicaciones**:
  - Botones principales
  - Navbar principal
  - Links importantes
  - Focus rings
  - Elementos destacados

---

### 2. **PURPLE (Púrpura)** - Acento Secundario
- **Hex**: `#7C3AED`
- **Uso**: Elementos secundarios, highlights, hover states
- **Aplicaciones**:
  - Botones secundarios
  - Hover en elementos primarios
  - Gradientes combinados
  - Badges especiales
  - Efectos visuales

---

### 3. **ORANGE (Naranja Energético)** - Acento Principal
- **Hex**: `#F97316`
- **Uso**: CTAs, badges, destacados, acciones urgentes
- **Aplicaciones**:
  - Botones de acción
  - Badge de precios
  - Alertas y notificaciones
  - WhatsApp y redes sociales
  - Llamadas a la acción

---

### 4. **GRAY (Grises Neutros)**
- **Oscuro (Texto)**: `#1F2937`
- **Medio (Texto secundario)**: `#6B7280`
- **Claro (Fondos)**: `#F9FAFB`
- **Bordes**: `#E5E7EB`

---

## Gradientes Predefinidos

### Gradiente Primario
```css
background: linear-gradient(135deg, #2563EB 0%, #7C3AED 100%);
```
Uso: `.gradient-primary`

### Gradiente Acento
```css
background: linear-gradient(135deg, #F97316 0%, #F59E0B 100%);
```
Uso: `.gradient-accent`
- Orbs de fondo (teal-700/20)
- Estadísticas en Section3
- Mensajes de éxito (toasts)
- Indicadores de stock

---

### 4. **GRAY** - Texto Secundario
- **Uso**: Texto secundario, descripciones, placeholders
- **Tonos**:
  - `gray-400` - Texto secundario
  - `gray-500` - Placeholders

**Ejemplos**:
- Descripciones de productos
- Textos secundarios
- Información adicional

---

## ⚠️ COLORES REMOVIDOS

### Schneider Electric (REMOVIDO)
Los siguientes colores ya NO se usan en la aplicación:
- ❌ `#00A651` (Verde Schneider)
- ❌ `#008C42` (Verde Schneider oscuro)
- ❌ `#006B32` (Verde Schneider muy oscuro)
- ❌ `#25D366` (Verde WhatsApp)
- ❌ Clases `green-*` de Tailwind

---

## Regla de Oro ✨

### ❌ NO HAGAS:
- **NO uses colores verdes** (fueron removidos de la paleta)
- **NO mezcles gradientes de naranja + gris** (se ve feo)
- **NO combines amber + slate en un solo gradiente** (discordancia)
- **NO uses gradientes innecesarios** (usa colores sólidos cuando sea posible)

### ✅ SÍ HAGAS:
- **Usa colores sólidos** para elementos principales
- **Usa un solo color por elemento** (badge, botón, etc.)
- **Alterna entre slate, teal y amber** para diversidad visual
- **Usa gradientes solo en backgrounds orbs** (atmosféricos, no en UI)

---

## Implementación por Sección

### **Navbar**
- Background: `#475569` (slate-600)
- Links hover: `text-white`
- Badge carrito: `bg-amber-600`

### **Section1 (Hero)**
- Colores sólidos: `bg-slate-700`, `bg-amber-600`, `bg-teal-700`
- Orbs: `from-slate-700/20`, `from-teal-700/20`
- Headings: `text-amber-500` (sólido, no gradiente)
- Botones: `bg-slate-700 hover:bg-slate-600`
- Stats: `text-slate-700`, `text-teal-600`, `text-amber-500`

### **Section2 (Categorías)**
- Backgrounds: `bg-slate-700`, `bg-teal-700`, `bg-amber-600`
- Iconos: Colores sólidos
- Heading: `text-amber-500` (sólido)
- Orbs: `from-slate-700/15`, `from-teal-700/15`
- Hovers: `border-amber-500`, `text-amber-500`

### **Section3 (Beneficios)**
- Iconos: `bg-slate-700`
- Stats: `text-slate-700`, `text-amber-500`, `text-teal-600`
- Heading: `text-amber-500` (sólido)
- Orbs: `from-slate-700/10`, `from-teal-700/10`
- Hover texto: `text-amber-500`

### **Contacto**
- Focus rings: `focus:ring-slate-600`
- Botón enviar: `bg-slate-700 hover:bg-slate-600`
- Tarjetas: `bg-amber-500/10`, `bg-teal-600/10`, `bg-slate-600/10`
- Iconos: `text-amber-600`, `text-teal-600`, `text-slate-600`

### **ProductView**
- Spinner: `border-t-slate-600`
- Links hover: `hover:text-amber-600`
- Ring selección: `ring-slate-600`
- Stock: `text-teal-600`
- Botón WhatsApp: `bg-amber-600 hover:bg-amber-700`

### **Empresa**
- Iconos: `bg-slate-700`, `bg-amber-600`, `bg-teal-700`
- Stats: `text-slate-700`, `text-amber-500`, `text-teal-600`
- Botón: `bg-slate-700 hover:bg-slate-600`

### **Toast (Notificaciones)**
- Éxito: `bg-teal-600`
- Error: `bg-red-600`
- Info: `bg-black/80`
- Botones: `bg-slate-700`, `hover:bg-slate-600`

### **Catalogo**
- Badge precio: `bg-amber-600` (sólido)
- Botones: `from-slate-700 to-slate-600` (solo este gradiente permite)
- Orbs: `from-slate-700/20`, `from-teal-700/20`
- Focus rings: `focus:ring-slate-500`

---

## Referencia de Uso

| Elemento | Color | Tono |
|----------|-------|------|
| Botón primario | Slate | 700 |
| Botón hover | Slate | 600 |
| Badge/Acento | Amber | 600 |
| Texto primario | White | - |
| Texto secundario | Gray | 400 |
| Links hover | Amber | 400 |
| Fondo card | White | 5% opacity |
| Border | White | 20% opacity |
| Orb fondo | Slate/Teal | 20% opacity |

---

## ¿Dudas sobre un color?

Si no sabes qué color usar:
1. ¿Es un elemento principal? → **Slate**
2. ¿Es un acento/destacado? → **Amber**
3. ¿Es un elemento alternativo? → **Teal**
4. ¿Es texto secundario? → **Gray**

¡Listo! 🎉
