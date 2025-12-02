# 🎨 Paleta de Colores - Protex Innovation

## Colores Principales

### 1. **SLATE (Gris Azulado)** - Primario
- **Uso**: Elementos principales, botones primarios, fondos, iconos
- **Tonos**:
  - `slate-700` - Oscuro (botones, backgrounds)
  - `slate-600` - Medio (hovers, borders)
  - `slate-500` - Claro (detalles)
  - `slate-400` - Muy claro (texto)

**Ejemplos**:
- Botones principales
- Fondos de cards
- Iconos
- Focus rings

---

### 2. **AMBER (Naranja Cálido)** - Acento Principal
- **Uso**: Destacados, badges, precios, CTAs secundarias
- **Tonos**:
  - `amber-600` - Oscuro (badges, botones)
  - `amber-500` - Medio (texto, acentos)
  - `amber-400` - Claro (estadísticas)

**Ejemplos**:
- Badge de precios en productos
- Badge de cantidad en carrito
- Colores de acento en headings
- Hovers en enlaces

---

### 3. **TEAL (Verde Gris/Azulado)** - Secundario
- **Uso**: Elementos secundarios, alternancia de colores
- **Tonos**:
  - `teal-700` - Oscuro (backgrounds)
  - `teal-600` - Medio (iconos)
  - `teal-400` - Claro (estadísticas)

**Ejemplos**:
- Algunos cards en Section1 (alternancia)
- Algunos cards en Section2 (categorías)
- Orbs de fondo (teal-700/20)
- Estadísticas en Section3

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

## Regla de Oro ✨

### ❌ NO HAGAS:
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

### **Section1 (Hero)**
- Colores sólidos: `bg-slate-700`, `bg-amber-600`, `bg-teal-700`
- Orbs: `from-slate-700/20`, `from-teal-700/20`
- Headings: `text-amber-500` (sólido, no gradiente)

### **Section2 (Categorías)**
- Backgrounds: `bg-slate-700`, `bg-teal-700`, `bg-amber-600`
- Iconos: Colores sólidos
- Heading: `text-amber-500` (sólido)
- Orbs: `from-slate-700/15`, `from-teal-700/15`

### **Section3 (Beneficios)**
- Iconos: `bg-slate-700`
- Stats: `text-slate-400`, `text-teal-400`, `text-amber-400`
- Heading: `text-amber-500` (sólido)
- Orbs: `from-slate-700/10`, `from-teal-700/10`

### **Navbar**
- Links hover: `text-amber-400`
- Badge carrito: `bg-amber-600`
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
