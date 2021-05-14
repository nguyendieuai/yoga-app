import React from 'react';

const AboutUsTestimonial = () => {
    return (
      <div className="testimonial-container">
      <div className="testimonials">
        <div className="slide-btn">
          <div className="btn" id="btn-1" />
          <div className="btn" id="btn-2" />
          <div className="btn" id="btn-3" />
        </div>
        <div className="user-container" id="user-1">
          <div className="user-img-container">
            <img src="img/testimonials-1.jpg" alt="" className="user-img" />
          </div>
          <div className="user-info">
            <p className="user-name">Nguyễn Hiếu</p>
            <p className="user-massage">Chuyên gia Yoga Nguyễn Hiếu đã có hơn 12 năm nghiên cứu và giảng dạy
              Yoga tại các trung tâm và đã huấn luyện cho hàng nghìn học viên khắp Việt Nam và thế
              giới.<br />Hiện tại, chị là tổng giám đốc công ty Zenlife Yoga Việt Nam và là huấn luyện viên
              trưởng cho chương trình đào tạo giáo viên Yoga.</p>
          </div>
        </div>
        <div className="user-container" id="user-2">
          <div className="user-img-container">
            <img src="img/testimonials-2.jpg" alt="" className="user-img" />
          </div>
          <div className="user-info">
            <p className="user-name">Võ Thị Minh Huệ</p>
            <p className="user-massage"> Chuyên gia Tâm lý trị liệu, khám và trị liệu tâm lý<br />Huấn luyện viên
              Yoga và Thiền, nhà sáng lập Trung tâm yoga và thiền Tâm Lý Trẻ, nhiều năm kinh nghiệm sử
              dụng yoga và thiền trong trị liệu tâm lý cho người lớn và trẻ em</p>
          </div>
        </div>
        <div className="user-container" id="user-3">
          <div className="user-img-container">
            <img src="img/testimonials-3.jpg" alt="" className="user-img" />
          </div>
          <div className="user-info">
            <p className="user-name">Kim Nguyễn</p>
            <p className="user-massage">Chuyên đào tạo và tập huấn các giáo viên yoga tại Singapore và Thái
              Lan.<br />Cô có hơn 10 năm tập luyện trong lĩnh vực yoga tại Việt Nam và Quốc Tế.</p>
          </div>
        </div>
      </div>
    </div>
    )
}

export default AboutUsTestimonial;