import React from "react";
import Header from "./header";
import Logo from "./../img/logo.jpg";
import PlayStore from "./../img/google.png";
import { useLocation } from "react-router-dom";

function StaticPage() {
    const location = useLocation();
    const { title } = location.state || {};
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto p-4 md:p-8">
        <h1 className="lg:text-3xl text-lg font-bold text-gray-800 mb-4">
          {title} – Teen Patti Master – 3Patti Master
        </h1>
        <div className="flex flex-col lg:flex-row sm:flex-col md:flex-col">
        <div className="bg-white shadow-lg rounded-lg w-full md:w-2/3 overflow-hidden lg:p-5 mr-10 p-2">
          <div className="flex flex-col md:flex-row p-6">
            {/* Left side: Image and Title */}
         
            <div className="flex justify-center md:justify-start mt-5 mb-4 md:mb-0 md:w-1/3">
            <a href="https://www.earntp.com/m/0pfw8k" target="_blank" rel="noopener noreferrer " >
              <img
                src={Logo}
                alt="Logo"
                className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain"
              /></a>
            </div>

            {/* Right side: Information */}
            <div className="md:w-2/3 md:pl-6">
              <ul className="space-y-4">
                <li className="flex justify-between lg:text-lg text-sm bg-gray-200 p-2">
                  <span className="font-semibold">App Name:</span>
                  <span>{title}</span>
                </li>
                <li className="flex justify-between lg:text-lg text-sm">
                  <span className="font-semibold">Size:</span>
                  <span>62.5MB</span>
                </li>
                <li className="flex justify-between lg:text-lg text-sm bg-gray-200 p-2">
                  <span className="font-semibold">Latest Version:</span>
                  <span>22.02.01</span>
                </li>
                <li className="flex justify-between lg:text-lg text-sm">
                  <span className="font-semibold">MOD Info:</span>
                  <span>{title}</span>
                </li>
                <li className="flex justify-between lg:text-lg text-sm items-center bg-gray-200 p-2">
                  <span className="font-semibold">Get it On:</span>
                  <a href="https://www.earntp.com/m/0pfw8k" target="_blank" rel="noopener noreferrer">
                  <img
                    src={PlayStore}
                    alt="Google Play Store"
                    className="w-24 h-10"
                  /></a>
                </li>
                <li className="flex justify-between lg:text-lg text-sm">
                  <span className="font-semibold">Update:</span>
                  <span>Android</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Download Button Section */}
          <a  href="https://www.earntp.com/m/0pfw8k" target="_blank" rel="noopener noreferrer">
          <div className="bg-orange-500 p-4 text-white text-xl font-bold flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-8 h-8 text-orange-600 mr-3"
            >
              <path
                fill="white"
                d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5-12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0"
              />
            </svg>
            Download(65.23)
          </div></a>

          {/* Additional Content Section */}
          <div className="mt-10 mb-5 text-left">
            <span>
              <strong>
                {title} – Teen Patti Master – 3Patti Master
              </strong>
              एक <strong>Real Cash</strong> गेम हैं। जैसे तो आप सभी लोगों ने इस एप्लीकेशन के बारे में जरूर कीच चुना होंगे, क्योंकि आज कल बहुत ही इस{" "}
              <strong>Teen Patti Master Old Apk</strong> प्रचलित हो गया हैं। दोस्तों हमने{" "}
              <strong>Internet</strong> पर बहुत ही <strong>Research</strong> करने के बाद ही{" "}
              <strong>Teen Patti Master Old</strong> की <strong>Information</strong> लेकर पहोंच चुका हूं। दोस्तों इस एप्लीकेशन को अभि लाखों लोगों पसंद करने लगे हैं। इस तीन पट्टी मास्टर को पूरे देश भरमे चर्चा होने लगी हैं।
              <strong>Teen Patti Master Purana</strong> एक <strong>Online Rummy</strong> ओर{" "}
              <strong>Teen Patti</strong> रियल कैश गेम हैं। ओर हम आपको तीन पति मास्टर 2022 का{" "}
              <strong>Purana Version</strong> के बारे में बात करने वाले हैं।
            </span>
          </div>
          <div className="mt-10 mb-5 text-left">
          <h3 className="lg:text-3xl text-lg text-left mb-3 font-bold">What Is {title}  Apk?</h3>
          <p>3 Patti Master Purana App क्या हैं? जैसे कि इस एप्लीकेशन एक Online Earning Platform हैं। जहां आपको Income करने के लिए काफी सारे गेम ओर कीचर्स से भरपुर दिया जाता हैं। जिंसमे आप लोग अलग – अलग उपयोगकर्ता के साथ ऑनलाइन गेम खेलकर घेर बैठे बैठे पैसे कमा सकते हैं।</p>
          <p className="mt-5">यहां तीन पति मास्टर के कंपनी ने 100% Secure करने के बाद ही Launch किया हैं। ओर तो ओर 100% Legal App हैं, किसके कारण आपका पैसे कभी भी Fraud नही हो सकते हैं। दोस्तों इस एप्लीकेशन बहुत ही साधारण तरीके से बनाया गया है तो हमारी सलाह है कि आप इसे तुरंत Download करें।

</p>
<h3 className="lg:text-3xl text-lg text-left my-3 font-bold">Download {title}</h3>
<a href="https://www.earntp.com/m/0pfw8k" target="_blank" rel="noopener noreferrer">
<div className="bg-orange-500  flex p-4 text-white text-xl font-bold flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-8 h-8 text-orange-600 mr-3"
            >
              <path
                fill="white"
                d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5-12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0"
              />
            </svg>
            Download
          </div>
          </a>
          <p className="mt-5">क्या आप दोस्तों इस Teen Patti Master में 2022 का Purana Version करना चाहते है तो हमारे साथ जुड़े रहें। यह Application एक प्रकार की Online Gambling ऐप हैं। मगर जो आपको इसमें उपलब्ध कीची भी गेम खेलने Experience नही है तो बिल्कुल लगता हैं। यदि जो आप Online Income करने के लिए भरोचंद एप्लीकेशन की तलाश में है तो आपके लिए इस बेस्ट ऐप हो सकती हैं। अगर आप Teen Patti Master App Download करना चाहते है? तो नीचे बताए प्रोसेस को फॉलो करना होंगे।</p>
        
   <div className="mt-5">
  <ol>
    <li> <span className="font-bold text-xl mr-3">1.</span>To download Master Teen Patti, click on the "Download" button.</li>
    <li> <span className="font-bold text-xl mr-3">2.</span>After clicking, you will be redirected to the designated website.</li>
    <li> <span className="font-bold text-xl mr-3">3.</span>On the website, you will need to click the download button again.</li>
    <li> <span className="font-bold text-xl mr-3">4.</span>The link for the Master Teen Patti app will open.</li>
    <li> <span className="font-bold text-xl mr-3">5.</span>Once opened, click "Ok", and the app's file will start downloading.</li>
    <li> <span className="font-bold text-xl mr-3">6.</span>After the download is 100% complete, install the app on your smartphone.</li>
  </ol>
</div>
<div className="mt-5">
<h3 className="lg:text-3xl text-lg text-left my-3 font-bold">Create Account In {title}</h3> 
<p>सभी यूज़र्स को यह प्रश्न जरूर होंगे कि Teen Patti Master Purana App में Account Register कैसे करें? अगर जो आप Account Register करना जानते है तो आपके लिए जानने की जरूर नही हैं। अगर जो आप नही जानते है तो कीची भी प्रकार का टेंसन लेना का जरूरत नही हैं। क्योंकि हम आपकी यहां स्टेप बाय स्टेप सिखाएंगे।</p>

<ol>
    <li> <span className="font-bold text-xl mr-3">1.</span>Account create करने के लिए आपको केहने पर दिए Download And Install करदेना हैं।.</li>
    <li> <span className="font-bold text-xl mr-3">2.</span>दोस्तों इनस्टॉल करने के बाद Open करें।.</li>
    <li> <span className="font-bold text-xl mr-3">3.</span>ओपन करने के बाद आपको Mobile Number Login ऑप्शन को सेलेस्ट कीजिए।.</li>
    <li> <span className="font-bold text-xl mr-3">4.</span>फिर आप 1. Mobile Number 2. Password And 3. OTP बटन पर क्लिक करें।.</li>
    <li> <span className="font-bold text-xl mr-3">5.</span>Inter OTP ओर Submit पर क्लिक करें, क्लिक करते ही आपके Account Register हो जाएगा।.</li>
  
  </ol>
      </div>
          </div>

          {/* Cash Addition */}
          <div className="mt-10 mb-5 text-left">
            <h3 className="lg:text-3xl text-lg  mb-5 mb-5 font-bold">How To Add Cash In {title}</h3>
            <p className="mb-4">
              दोस्तों, आपको इस Purana Teen Patti Master में दिए गए उपलब्ध गेम खेलना चाहते है तो एक बार अवश्य Add Money करें। आपको पैसे ऐड करने के लिए ऐड कैश का ऑप्शन दिखेगा, उस पर क्लिक करें। फिर आपको उसमे से पैसे काटने होंगे। जहां आप Google Pay, Phone Pay, Payment ओर UPI के विकल्प मिकते हैं, जिंसमे से कीची एक को सेलेस्ट करके आपके खाते में जमा कर दिया जाएगा। दोस्तों अगर आप पहले बार Payment Add करते है तो आपको 15% से 30% Cash Back मिलता हैं।
            </p>
            <ol className="list-decimal ml-6">
              <li>Add Cash करके के लिए Home Page पर दिए Add Cash Option पर क्लिक करें।</li>
              <li>क्लिक करते ही ₹300 से लेकर ₹20,000 का अलग – अलग Amount Options दिखाई देंगे।</li>
              <li>जिंसमे से कीची एक को सेलेस्ट करें।</li>
              <li>फिर आपको Payment Add करने के लिए GPay, Phone Pay, Payment जैसे ऑप्शन मिकते हैं।</li>
              <li>उसमे से आप मनपसंद ऑप्शन को सेलेस्ट करके Payment Add कर सकते हैं।</li>
            </ol>
          </div>

          {/* Withdraw Money */}
          <div className="mt-10 mb-5 text-left">
            <h3 className="lg:text-3xl text-lg  mb-5 font-bold">How To Withdraw Money In Old {title}</h3>
            <p className="mb-4">
              3 Patti Master में Payment Withdraw करना बहुत ही Simple हैं। जिसके लिए कंपनी ने Home Page पर दिए गए Withdraw Button पर क्लिक करें। फिर दिए गए उचित बॉक्स में वह जितना Amount Transfer करना चाहते है उतनी रकम लिखें। इसके बाद आपको निम्नलिखत बैंक में प्रवेश करना होंगे। Account Details?
            </p>
            <ol className="list-decimal ml-6">
              <li>Cash Withdraw करने के लिए सबसे पहले आप Withdraw Option पर क्लिक करें।</li>
              <li>बादमे आप UPI या Bank Account विकल्प में से कीची एक को सेलेस्ट करें।</li>
              <li>फिर आप उसमे मागी हुई सभी जानकारी सही तरीके से भरें और Save करें।</li>
              <li>बादमे आप दिए गए उचित बॉक्स में Amount लिखकर Withdraw Button पर क्लिक करें।</li>
              <li>क्लिक करते Amount Successful होने में 1 मिनिट होगें।</li>
            </ol>
          </div>

          {/* Refer and Earn */}
          <div className="mt-10 mb-5 text-left">
            <h3 className="lg:text-3xl text-lg  mb-5 font-bold">How to Refer & Earn Money</h3>
            <p className="mb-4">
              अगर आपको कोई पूछे कि Teen Patti Master में बिना रिस्क इनकम कर सकते है? तो जरूर बताएं की बिना जोखिम Unlimited Income कर सकते हैं। जिस प्रोग्राम का नाम है रेफेर एंड एरन हैं। दोस्तों इस प्रोग्राम आपके लिए पैसे कमाने का सबसे अच्छा तरीका हैं, इस फीचर को अगर आप सही तरीके से इस्तेमाल करते है तो गेम खेलने की जरूरत नहीं हैं। आप अपने तीन पति मास्टर की स्वयं लिंक कॉपी करके शेयर करने पर हजारों रुपये कमा सकते हैं।
            </p>
            <ol className="list-decimal ml-6">
              <li>पहले आप Hone Page पर दिए Refer & Earn Option पर क्लिक करें।</li>
              <li>क्लिक करने के बाद आप Link Copy कीजिए।</li>
              <li>उसके बाद आप WhatsApp, Facebook, Instagram, Telegram जैसे कीचि भी Social Media Apps में Share करें।</li>
              <li>आपने शेयर किए गए लिंक से कोई भी बंदा Apk को Download करने में इस्तेमाल करते है तो आपको ₹20 बोनस मिलते हैं।</li>
              <li>उसके अलावा अगर वही रेफरल रिचार्ज करते है तो 30% कमीशन एक्स्ट्रा मिलता है।</li>
            </ol>
          </div>

          {/* Daily Rewards */}
          <div className="mt-10 mb-5 text-left">
            <h3 className="lg:text-3xl text-lg  mb-5 font-bold">7 Daily Rewards in Teen Patti Master</h3>
            <p>
              तीन पति मास्टर एप्लीकेशन में आपको 7 Daily Rewards का Features Available हैं। आपको यहां पर मुफ़्त में पूरे 1 साप्ताहिक बोनस मिलते हैं। जहां आप 24 घंटे में एक बार Spin लगा सकते हैं। स्पिन लगाकर आपको अपने क़िस्मत आजमाना होते हैं। और आप इस फीचर को पूरे 7 दिन यूज़ करने के बाद इनकम किए गए पैसे को Transfer कर सकते हैं।
            </p>
          </div>

          {/* Free Cash */}
          <div className="mt-10 mb-5 text-left">
            <h3 className="lg:text-3xl text-lg  mb-5 font-bold">Free Cash Features In Teen Patti Master</h3>
            <p>
              दोस्तों आपको Old Master Teen Patti application में Free Cash ऑप्शन की सुविधाएं दिए जाती हैं। जहां आपको हर रेफरल का कमीशन मिलते हैं। फ्री कैश ऑप्शन में रेफरल किया बंदा अगर निकासी करते है तो उसके प्रतिशक ₹200 का मुफ़्त बोनस मिल जाएंगे। और इस रुपये से आप अपने तीन पति मास्टर में दिए Favourite गेम को बिना पेमेंट खेल सकते हैं।
            </p>
          </div>

          {/* VIP Gift */}
          <div className="mt-10 mb-5 text-left">
            <h3 className="lg:text-3xl text-lg  mb-5 font-bold">What Is VIP Gift Option In Teen Patti Master ?</h3>
            <p>
              तीन पति मास्टर गेम में आपको VIP Gift का ऑप्शन दिया जाता हैं। आपको इस वीआईपी प्रोग्राम में तीन प्लान दिए जाते हैं। और इस तीनो प्लान में कंपनी के अंतर्गत बिल्कुल निःशुल्क बोनस मिलता हैं। आप इस फीचर को सही तरीके से इस्तेमाल करके अच्छा पैसे कमा सकते हैं।
            </p>
          </div>

          {/* Scratch Card Features */}
          <div className="mt-10 mb-5 text-left ">
            <h3 className="lg:text-3xl text-lg  mb-5 font-bold">Scratch Card Features</h3>
            <p>
              आपको इस एप्लीकेशन के कंपनी ने Scratch Card Option का सुविधाएं दिए जाती हैं। जैसे कि इस प्रोग्राम के माध्यम से इनकम करने के लिए न्यूनतम ₹100 रिचार्ज करना होंगे। Teen Patti Master Purana में दिए गए स्क्रेच कार्ड ऑप्शन में अधिक भी पैसे ऐड कर सकते हैं, जहां आपको 30 कार्ड का प्लान मिलता है। और जितना अधिक जोड़ते है उतने बड़िया बोनस हासिल प्राप्त करेंगे।
            </p>
          </div>

          {/* FAQs */}
          <div className="mt-10 mb-5 text-left">
            <h3 className="lg:text-3xl text-lg  mb-5 font-bold">Teen Patti Master FAQ’s</h3>
            <ul className="list-disc ml-6 text-left">
              <li>
                <strong>Q.1:</strong> Teen Patti Master Owner Name? <br />
                <strong>Ans:</strong> Teen Patti Master Taurus कंपनी ने Launch किया हैं
              </li>
              <li>
                <strong>Q.2:</strong> Which country is Master Teen Patti From? <br />
                <strong>Ans:</strong> Master Teen Patti एक Indian Application हैं
              </li>
              <li>
                <strong>Q.3:</strong> 3 Patti Master Is Safe or Not? <br />
                <strong>Ans:</strong> Yes 3 पति मास्टर 100% Safe हैं
              </li>
              <li>
                <strong>Q.4:</strong> What is The Sign-Up Bonus In Teen Patti Master? <br />
                <strong>Ans:</strong> आपको इस एप्लीकेशन में ₹20 Sign-Up बोनस मिलते हैं
              </li>
              <li>
                <strong>Q.5:</strong> How much bonus on Every Refer in Refer & Earn Program in This Apk? <br />
                <strong>Ans:</strong> आपको इस एप्लीकेशन में प्रत्येक रेफरल पर ₹20 बोनस और 30% कमिशन मिलता हैं
              </li>
              <li>
                <strong>Q.6:</strong> What is the Minimum Withdraw In 3Patti Master? <br />
                <strong>Ans:</strong> इस एप्लीकेशन में आप कम से कम ₹300 की निकासी कर सकते हैं
              </li>
            </ul>
          </div>

          {/* Disclaimer */}
          <div className="mt-10 mb-5 text-left p-4 border-l-4 border-yellow-500">
            <p className="font-semibold text-gray-800">
              Note: इस तीन पति मास्टर एक प्रकार के जुवा एप्लीकेशन हैं। इस गेम की लत लग सकती हैं। कृपया आप अपने जिम्मेदारी से खेलें। इसिलए अगर आपकी उम्र 18 वर्ष अधिक होनी जरूरी हैं, अगर आपकी उम्र कम है तो अभि दूर रहें।
            </p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg w-full md:w-1/4 overflow-hidden p-5">
        <h3 className="lg:text-3xl text-lg text-left my-3 font-bold">Recent Posts</h3>
        <ul className="text-sm text-left ">
        <a href="https://www.earntp.com/m/0pfw8k" target="_blank" rel="noopener noreferrer">
  <li className="border-b bg-gray-100 p-4 mt-2">Teen Patti Master Point Rummy – Bonus 200₹ – Teen Patti Master Rummy</li>
  <li className="border-b bg-gray-100 p-4 mt-2">Teen Patti Master Latest Version – Teen Patti Master Latest Version Download – Earn 51Rs</li>
  <li className="border-b bg-gray-100 p-4 mt-2">{title} Download – {title} – Real Cash ₹300</li>
  <li className="border-b bg-gray-100 p-4 mt-2">Teen Patti Master Latest Version – Teen Patti Master Latest Version Download – Earn 51RS</li>
  <li className="border-b bg-gray-100 p-4 mt-2">Teen Patti Master Purana – 3Patti Master Download</li></a>
</ul>
<h3 className="lg:text-3xl text-lg text-left my-3 font-bold">Recent Comments</h3>
<p>No comments to show.</p>
<h3 className="lg:text-3xl text-lg text-left my-3 font-bold">Archives</h3>
<ul className="text-sm text-left ">

  <li className="border-b bg-gray-100 p-4 mt-2">March 2024</li>
  <li className="border-b bg-gray-100 p-4 mt-2">october 2024
  </li>
 
</ul>
<h3 className="lg:text-3xl text-lg text-left my-3 font-bold">Categories</h3>
<ul className="text-sm text-left ">
<a href="https://www.earntp.com/m/0pfw8k" target="_blank" rel="noopener noreferrer">
 <li className="border-b bg-gray-100 p-2 mt-2">  Teen Patti App</li>
 <li className="border-b bg-gray-100 p-2 mt-2">Teen Patti Master</li>
 <li className="border-b bg-gray-100 p-2 mt-2">Teen Patti Master 2021</li>
 <li className="border-b bg-gray-100 p-2 mt-2">Teen Patti Master Apk</li>
 <li className="border-b bg-gray-100 p-2 mt-2">Teen Patti Master Apk Download</li>
 <li className="border-b bg-gray-100 p-2 mt-2">Teen Patti Master App</li>
 <li className="border-b bg-gray-100 p-2 mt-2">Teen Patti Master Club</li>
 <li className="border-b bg-gray-100 p-2 mt-2">Teen Patti Master Download</li>
 <li className="border-b bg-gray-100 p-2 mt-2">Teen Patti Master Dragon Tiger</li>
 <li className="border-b bg-gray-100 p-2 mt-2">Teen Patti Master Gold</li>
 <li className="border-b bg-gray-100 p-2 mt-2">Teen Patti Master King</li>
 <li className="border-b bg-gray-100 p-2 mt-2">Teen Patti Master Latest</li>
 <li className="border-b bg-gray-100 p-2 mt-2">Teen Patti Master Latest Version</li>
 <li className="border-b bg-gray-100 p-2 mt-2">Teen Patti Master New</li>
 <li className="border-b bg-gray-100 p-2 mt-2">Teen Patti Master Old</li>
 <li className="border-b bg-gray-100 p-2 mt-2">{title}</li>
 <li className="border-b bg-gray-100 p-2 mt-2">Teen Patti Master Online App</li>
 <li className="border-b bg-gray-100 p-2 mt-2">Teen Patti Master Online Game</li>
 <li className="border-b bg-gray-100 p-2 mt-2">Teen Patti Master Purana2</li></a>

</ul>


        </div>
        </div>
      </div>
    </div>
  );
}

export default StaticPage;
