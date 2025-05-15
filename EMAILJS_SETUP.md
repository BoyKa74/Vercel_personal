# Hướng dẫn thiết lập EmailJS

Đây là hướng dẫn chi tiết để thiết lập EmailJS cho chức năng gửi email từ form liên hệ trên trang portfolio của bạn.

## Bước 1: Đăng ký tài khoản EmailJS

1. Truy cập [EmailJS](https://www.emailjs.com/) và đăng ký tài khoản miễn phí
2. Gói miễn phí cho phép bạn gửi 200 email mỗi tháng, đủ cho hầu hết các trang portfolio cá nhân

## Bước 2: Tạo Email Service

1. Đăng nhập vào EmailJS
2. Truy cập tab "Email Services"
3. Nhấp vào "Add New Service"
4. Chọn nhà cung cấp email của bạn (Gmail, Outlook, v.v.)
5. Làm theo hướng dẫn để kết nối tài khoản email của bạn
6. Sau khi tạo xong, bạn sẽ nhận được một **Service ID** (ví dụ: `service_abc123`)

## Bước 3: Tạo Email Template

1. Truy cập tab "Email Templates"
2. Nhấp vào "Create New Template"
3. Đặt tên cho template (ví dụ: "Contact Form")
4. Thiết kế nội dung email theo ý muốn, sử dụng các biến sau:
   - `{{from_name}}` - Tên người gửi
   - `{{from_email}}` - Email người gửi
   - `{{subject}}` - Tiêu đề email
   - `{{message}}` - Nội dung tin nhắn
   - `{{to_name}}` - Tên người nhận (tên của bạn)

5. Ví dụ về mẫu email:
```html
<h2>Tin nhắn mới từ website portfolio</h2>
<p><strong>Tên:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Tiêu đề:</strong> {{subject}}</p>
<p><strong>Tin nhắn:</strong></p>
<p>{{message}}</p>
```

6. Lưu template và bạn sẽ nhận được một **Template ID** (ví dụ: `template_xyz789`)

## Bước 4: Lấy Public Key

1. Truy cập tab "Account"
2. Tìm mục "API Keys"
3. Sao chép **Public Key** của bạn

## Bước 5: Cập nhật mã trong Contact.tsx

1. Mở file `src/components/Contact.tsx`
2. Tìm và cập nhật các biến sau:
```typescript
const serviceId = 'service_id_của_bạn'; // Thay bằng Service ID của bạn
const templateId = 'template_id_của_bạn'; // Thay bằng Template ID của bạn
const publicKey = 'public_key_của_bạn'; // Thay bằng Public Key của bạn
```

## Bước 6: Kiểm tra chức năng

1. Chạy trang web của bạn (`npm run dev`)
2. Điền vào form liên hệ và gửi tin nhắn thử
3. Kiểm tra hộp thư đến của bạn để xác nhận email đã được gửi thành công

## Xử lý sự cố

- Nếu email không được gửi, kiểm tra console để xem lỗi chi tiết
- Đảm bảo rằng bạn đã kích hoạt dịch vụ email trong EmailJS
- Kiểm tra xem ID và key đã được nhập chính xác

## Bảo mật

- **Public Key** được thiết kế để sử dụng ở phía client, vì vậy an toàn để đưa vào mã nguồn
- Tuy nhiên, EmailJS có các giới hạn để tránh lạm dụng dịch vụ
- Nếu bạn cần bảo mật cao hơn, hãy xem xét các giải pháp backend như Node.js với Nodemailer 