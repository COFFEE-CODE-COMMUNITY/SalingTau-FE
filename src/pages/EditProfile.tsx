import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function EditProfile() {
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('Andi');
    const [lastName, setLastName]= useState('Pratama');
    const [skillTitle, setJobTitle] = useState('Creator & Web Developer');

    const handleSaveChanges = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Data yang disimpan:', {firstName,lastName,skillTitle});
        alert('Profile Berhasil diperbarui! (Simulasi)');
        navigate('/profile');
    };

    const handleCancel = () => {
        navigate('/profile');
    };

    return (
        <div className="p-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-md border p-8">
                <h2 className="text-2xl font-blod text-gray-900 mb-6">Edit Profile</h2>

                <form onSubmit={handleSaveChanges} className="space-y-6">
                    {/* Foto Profile */}
                    <div className="flex items-center space-x-4">
                        <img
                            className="h-20 w-20 rounded-full object-cover"
                            src="https://images.unsplash.com/photo-1528763380143-65b3ac89a3ff?q=80&w=2574&auto=format&fit=crop"
                            alt="User avatar"
                        />
                        <div>
                            <label htmlFor="file-upload" className="cursor-pointer bg-white border border-gray-300 rounded-md px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50">
                                Ubah Foto
                            </label>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                        </div>
                    </div>

                    {/* Form Field */}
                    <div>
                        <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">First Name</label>
                        <input
                            type="text"
                            id='firstname'
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">Last Name</label>
                        <input
                            type="text"
                            id='lastname'
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="skillTitle" className="block text-sm font-medium text-gray-700">Keahlian</label>
                        <input 
                            type="text"
                            id="skillTitle"
                            value={skillTitle}
                            onChange={(e) => setJobTitle(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-end space-x-4 pt-4">
                        <button
                            type="button"
                            onClick={handleCancel}
                            className="bg-white py-2 px-5 border border-gray-300 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50"
                        >
                            Batal
                        </button>
                        <button
                        type="submit"
                        className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700"
                        >
                            Simpan Perubahan
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}