import { promises as fs } from 'fs'
import path from 'path'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event) // obtenemos los datos del formulario
    const filePath = body.activity
      ? path.join(process.cwd(), 'data', 'formDataGroupA.json')
      : path.join(process.cwd(), 'data', 'formDataGroupB.json')

    // Leemos datos existentes
    let existingData = []
    try {
      const file = await fs.readFile(filePath, 'utf-8')
      existingData = JSON.parse(file)
    } catch (err) {
      existingData = []
    }

    // Agregamos el nuevo formulario
    existingData.push(body)

    // Guardamos de nuevo en JSON
    await fs.writeFile(filePath, JSON.stringify(existingData, null, 2))

    return { success: true, message: 'Datos guardados correctamente' }
  } catch (error) {
    return { success: false, message: error.message }
  }
})
