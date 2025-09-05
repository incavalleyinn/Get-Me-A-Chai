//actions/useractions.js
"use server"
import connectToDatabase from "@/lib/mongodb"
import User from "@/models/User"

export async function saveCreatorProfile(data) {
  try {
    const res = await fetch('/api/user/profile', { // you must create this API route
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const result = await res.json();

    if (!res.ok) {
      throw new Error(result.error || "Failed to save profile");
    }

    return { success: true, data: result };
  } catch (error) {
    console.error("Error saving profile:", error);
    return { success: false, error: error.message };
  }
}
