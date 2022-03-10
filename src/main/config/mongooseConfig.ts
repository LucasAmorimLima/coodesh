import mongoose from 'mongoose'

export const mongooseConnect = async () => {
  try {
    await mongoose.connect('mongodb+srv://adm:1d494E7E@cluster0.i0zjh.mongodb.net/coodesh')
    console.log('Database connected')
  } catch (error) {
    console.error('Error connecting database')
    console.error(error)
    process.exit(1)
  }
}