import React from 'react';

const ClassMain = () => {
    return (
        <div className="card-container">
        <p className="main-card-title">Trải Nghiệm Tất Cả Loại Hình Yoga Cùng Các Cô Giáo Yoga</p>
        <div className="card-content">
          <div className="card">
            <div className="card-img-container">
              <a href="http://www.yogaplus.vn/classes/ball-yoga">
                <img src="img/yoga-pose-1.jpg" alt="" className="card-img" />
              </a>  
            </div>
            <p className="card-title">Yoga Bóng<span className="card-span">Yoga bóng là bài tập hữu ích cho vùng bụng<br /> và thân dưới. Những<br /> ai tập lớp yoga bóng sẽ nhanh<br /> chóng đạt đến một thể lực dẻo<br /> dai, khỏe mạnh toàn diện, đặc<br /> biệt là thân dưới.</span></p>
          </div>

          <div className="card">
            <div className="card-img-container">
              <a href="http://www.yogaplus.vn/classes/yoga-trinity">
                <img src="img/yoga-pose-2.jpg" alt="" className="card-img" />
              </a>
            </div>
            <p className="card-title">Yoga In-trinity<span className="card-span">Đây là sự kết hợp giữa yoga,<br /> taichi, các động tác võ thuật.<br /> Người tập sẽ nhận được vô vàn<br /> lợi ích như sức mạnh, linh hoạt,<br /> nhanh nhẹn và dẻo dai...</span></p>
          </div>

          <div className="card">
            <div className="card-img-container">
              <a href="http://www.yogaplus.vn/classes/aerial-yoga">
                <img src="img/yoga-pose-3.jpg" alt="" className="card-img" />
              </a>    
            </div>
            <p className="card-title">Yoga Dây<span className="card-span">Thực hành Yoga với một chiếc<br /> võng treo cách sàn khoảng 1m.<br /> Võng treo là dải lụa rộng và chắc<br /> chắn, có thể chịu được trọng<br /> lượng trên 300 kí.</span></p>
          </div>
        </div>

        <div className="card-content">
          <div className="card">
            <div className="card-img-container">
              <a href="http://www.yogaplus.vn/classes/wheel-yoga-stick-yoga">
            <img src="img/yoga-pose-4.jpg" alt="" className="card-img" />
            </a>  
            </div>
            <p className="card-title">Wheel Yoga<span className="card-span">Bài tập yoga con lăn giúp giảm<br /> đáng kể chứng đau lưng và<br /> nhận được muôn vàn lợi ích khác<br /> như cân chỉnh cột sống, thư giãn<br /> cơ bắp, mở rộng lồng ngực, xoa<br /> bóp các khớp.</span></p>
          </div>
          <div className="card">
            <div className="card-img-container">
            <a href="http://www.yogaplus.vn/classes/gentle-yoga">
              <img src="img/yoga-pose-5.png" alt="" className="card-img" />
            </a>
            </div>
            <p className="card-title">Yoga Gentle<span className="card-span">Gentle Yoga là lớp học Yoga cho<br /> người mới bắt đầu được giảng<br /> dạy với những phương thức nhẹ<br />nhàng.</span></p>
          </div>
          <div className="card">
            <div className="card-img-container">
            <a href="http://www.yogaplus.vn/classes/ashtanga-yoga">
              <img src="img/yoga-pose-6.jpg" alt="" className="card-img" />
            </a>
          </div>
            <p className="card-title">Ashtanga Yoga<span className="card-span">Lớp yoga này có cường độ tập<br /> luyện mạnh mẽ, giúp vóc dáng<br /> thon gọn nhanh chóng và làm<br /> sạch cơ thể</span></p>
          </div>
        </div>
      </div>
    )
}

export default ClassMain;