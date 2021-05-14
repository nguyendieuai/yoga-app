import React from 'react';

const Banner = () => {
    return (
        <React.Fragment>
        <div className="banner-container">
                <div className="banner-img-container">
                    <img src="img/banner-img-1.jpg" alt="" className="banner-img" />
                </div>
                <div className="banner-content-container">
                    <div className="banner-content">
                        <h3 className="banner-title">YOGA VÀ DU LỊCH – DỪNG CHÂN TẠI PUNE, ẤN ĐỘ</h3>
                        <p className="banner-desc">
                        Không cần phải nói thì tín đồ yoga nào cũng biết đến nơi khởi nguồn của
                        yoga – Ấn Độ. Đây là địa điểm mà tín đồ yoga nào cũng mong một lần đặt
                        chân đến. Bạn có thể đăng kí một khóa học yoga tại đây. Để có thể cảm nhận
                        được tinh thần của đạo Hindu được truyền tải. Có rất nhiều môn học yoga khác
                        nhau cho bạn lựa chọn. Không chỉ vậy, đến đây bạn còn được trải nghiệm những
                        nét văn hóa truyền thống của Ấn Độ. Chứng kiến và trải nghiệm cuộc sống thanh
                        tịnh, yên bình, chầm chậm của vùng đất hình thành nên văn hóa yoga trên khắp
                        thế giới.
                        </p>
                        <a href="http://duyendangviet.vn/yoga-va-du-lich-hanh-trinh-kham-phaLea-moi-mien-the-gioi-cua-cac-tin-do-yoga/" className="banner-cta link">Xem tại đây</a>
                    </div>
                </div>
        </div>
        <div className="banner-container">
                <div className="banner-content-container">
                    <div className="banner-content">
                        <h3 className="banner-title">YOGA VÀ DU LỊCH ĐỪNG BỎ QUA TÂY TẠNG</h3>
                        <p className="banner-desc">
                        Tây tạng là nơi khởi nguồn của yoga tây tạng. Bộ môn này chú trọng về sự cân bằng
                        giữa âm và dương, động và tĩnh, giữa trong và ngoài. Lấy tĩnh (tâm) làm gốc,
                        lấy động (thân) làm ngọn. Gốc có vững chãi thì ngọn mới phát triển, lấy thiền làm
                        nền tảng cơ bản. Điều này bắt nguồn từ những người ẩn sĩ tu hành trên núi Himalaya
                        hùng vĩ. Chính vì vậy, nếu bạn muốn trải nghiệm hình thức yoga này thì đừng quên ghé
                        qua Tây Tạng.
                        </p>
                        <a href="http://duyendangviet.vn/yoga-va-du-lich-hanh-trinh-kham-pha-moi-mien-the-gioi-cua-cac-tin-do-yoga/" className="banner-cta link">Xem tại đây</a>
                    </div>
                </div>
                <div className="banner-img-container">
                    <img src="img/banner-img-2.jpg" alt="" className="banner-img" />
                </div>
        </div>
        
        </React.Fragment>
    )
}

export default Banner;