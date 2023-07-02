export interface IShopInfo {
  id: string;
  name: string;
  img: string;
  open: string;
  close: string;
  address: string;
  tel: string;
  telLink: string;
  latitude: number;
  longitude: number;
}

export const mockShops: IShopInfo[] = [
  {
    id: "shop0001",
    name: "Blink IT สาขา ฟอร์จูน",
    img: "/shop/shop-4.jpeg",
    open: "08:00",
    close: "21:00",
    address: "ถ.รัชดาภิเษก แขวง/เขตดินแดง กรุงเทพมหานคร",
    tel: "0812345678",
    telLink: "+66812345678",
    latitude: 13.758305,
    longitude: 100.564813,
  },
  {
    id: "shop0002",
    name: "Blink IT สาขาเซ็นทรัล พระราม 3",
    img: "/shop/shop-2.jpeg",
    open: "10:00",
    close: "21:00",
    address: "ถ.สาธุประดิษฐ์ แขวงช่องนนทรี เขตยานนาวา กรุงเทพมหานคร",
    tel: "0812345678",
    telLink: "+66812345678",
    latitude: 13.69797,
    longitude: 100.53806,
  },
  {
    id: "shop0003",
    name: "Blink IT สาขาเซ็นทรัล ปิ่นเกล้า",
    img: "/shop/shop-3.jpeg",
    open: "08:00",
    close: "21:00",
    address: "ถ.บรมราชชนนี แขวงอรุณอัมรินทร์ เขตบางกอกน้อย กรุงเทพมหานคร",
    tel: "0812345678",
    telLink: "+66812345678",
    latitude: 13.77831,
    longitude: 100.47636,
  },
  {
    id: "shop0004",
    name: "Blink IT สาขา สยามพารากอน",
    img: "/shop/shop-1.jpeg",
    open: "08:00",
    close: "21:00",
    address: "ถ.พระราม1 แขวงปทุมวัน เขตปทุมวัน กรุงเทพมหานคร",
    tel: "0812345678",
    telLink: "+66812345678",
    latitude: 13.746461,
    longitude: 100.535078,
  },
  {
    id: "shop0005",
    name: "Blink IT สาขา เซ็นทรัล ลาดพร้าว",
    img: "/shop/shop-5.jpeg",
    open: "08:00",
    close: "21:00",
    address: "ถ.พหลโยธิน แขวง/เขตจตุจักร กรุงเทพมหานคร",
    tel: "0812345678",
    telLink: "+66812345678",
    latitude: 13.815175,
    longitude: 100.561383,
  },
];
