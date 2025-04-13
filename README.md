# Desarrollo

## Pasos para levantar la aplicación en entorno de desarrollo

### 1. Clonar el repositorio

Ejecuta el siguiente comando para clonar el proyecto:

```bash
git clone [url-proyecto]
cd [nombre-del-proyecto]
```

### 2. Configurar la base de datos

Antes de iniciar el contenedor, configura las variables de entorno en un archivo `.env`:

```ini
POSTGRES_USER=tu_usuario
POSTGRES_DB=tu_base_de_datos
POSTGRES_PASSWORD=tu_contraseña
```

### 3. Instalar dependencias

Ejecuta el siguiente comando para instalar las dependencias del proyecto:

```bash
bun i
```

### 4. Levantar los servicios con Docker

Para iniciar los servicios, ejecuta:

```bash
docker compose up -d
```

### 5. Aplicar migraciones con Drizzle

Ejecuta el siguiente comando para aplicar las migraciones de la base de datos:

```bash
bun run db:push
```

### 6. Ejecutar el Seed

Para poblar la base de datos con datos iniciales, accede al siguiente enlace:

👉 [Ejecutar SEED](http://localhost:3000/api/seed)

### 7. Iniciar la aplicación

Ejecuta el siguiente comando para levantar la aplicación en modo desarrollo:

```bash
bun run dev
```
