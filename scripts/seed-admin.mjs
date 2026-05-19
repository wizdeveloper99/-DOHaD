import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';

async function seed() {
  await mongoose.connect('mongodb+srv://dohadindiaorg_db_user:K2EaOaCnZBPQzohO@cluster0.jgm2s1n.mongodb.net/?appName=Cluster0');
  
  const adminSchema = new mongoose.Schema({
    email: String,
    password: String,
    name: String,
    role: { type: String, enum: ['admin', 'superadmin'], default: 'admin' }
  }, { timestamps: true });
  
  const AdminUser = mongoose.models.AdminUser || mongoose.model('AdminUser', adminSchema);
  
  await AdminUser.deleteOne({ email: 'admin@dohadindia.org' });
  
  const hashedPassword = await bcrypt.hash('admin', 12);
  
  await AdminUser.create({
    email: 'admin@dohadindia.org',
    password: hashedPassword,
    name: 'Admin',
    role: 'superadmin'
  });
  
  console.log('Admin user created successfully!');
  console.log('Email: admin@dohadindia.org');
  console.log('Password: admin');
  process.exit(0);
}

seed().catch(err => { console.error(err); process.exit(1); });