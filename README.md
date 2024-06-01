# ⭐ Configuración inicial

## 💻 Ejecutar projecto en desarrollo

1. Clonar el repositorio
2. Copiar las variables del `.env.example` y crear el archivo `.env.local`.
3. Instalar las dependencias

```bash
npm install
# or
yarn install
```

4. Levantar la base de datos con el comando:

```bash
node docker-compose.yml
```

5. Ejecutar las migraciones de Prisma

```bash
npx prisma migrate dev
```

6. Ejecutar el Seed para agregar los usuarios y/o data de prueba

```bash
npm run seed
#or
yarn seed
```

7. Iniciar el proyecto de NextJS

```bash
npm run
#or
yarn dev
```

8. Abrir [http://localhost:3000](http://localhost:3000) para ver el proyecto inicial
> **Nota**: se recomienda limpiar el `localstorage` para borrar cualquier dato anterior.

# Configuración para SEO

1. Modificar los datos del archivo `manifest.ts`

# Configuración de NextAuth

1. Crear la variable `NEXTAUTH_SECRET` abriendo la terminal con el comando:

```sh
 openssl rand -base64 32
```
## 💻 Ejecutar proyecto en Producción con ▲ VERCEL

## Este template incluye

- [x] SEO optimization
