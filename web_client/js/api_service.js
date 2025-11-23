// web_client/js/api_service.js

// 1. CẤU HÌNH SUPABASE (Dán lại thông tin của bạn vào đây nhé)
const SUPABASE_URL = 'https://rernprzertpazvmiwifw.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJlcm5wcnplcnRwYXp2bWl3aWZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM2NzgyNTcsImV4cCI6MjA3OTI1NDI1N30.__sq3sUxCWaGIuxRVWCVvKJIgZELN3c2TFoDpybAXX0';

// 2. Hàm lấy dữ liệu (QUAN TRỌNG: Có chữ export ở đầu)
export async function fetchTouristSpots() {
    console.log("Đang gọi Supabase...");
    
    // Kiểm tra xem đã điền Key chưa
    if (SUPABASE_URL.includes("DÁN_URL") || SUPABASE_KEY.includes("DÁN_KEY")) {
        console.error("❌ LỖI: Bạn chưa điền URL hoặc KEY vào file api_service.js!");
        alert("Bạn quên điền Supabase Key trong file api_service.js rồi!");
        return [];
    }

    try {
        // Gọi thư viện Supabase
        const { createClient } = supabase;
        const client = createClient(SUPABASE_URL, SUPABASE_KEY);

        // Truy vấn dữ liệu
        const { data, error } = await client
            .from('tourist_locations_view')
            .select('*');

        if (error) {
            console.error("❌ Lỗi từ Supabase:", error);
            return [];
        }
        
        return data;

    } catch (err) {
        console.error("❌ Lỗi kết nối:", err);
        return [];
    }
}