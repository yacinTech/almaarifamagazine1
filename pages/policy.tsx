// pages/policy.tsx
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PolicyPage() {
  return (
    <>
      <Head>
        <title>سياسة الاستخدام</title>
        <meta name="description" content="سياسة استخدام موقع المجلة المعرفية." />
      </Head>

      <Header />

      <main style={{ maxWidth: 800, margin: "40px auto", padding: "0 20px", direction: "rtl", fontFamily: "'Tajawal', sans-serif", lineHeight: 1.8 }}>
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: 20 }}>سياسة الاستخدام</h1>

        <p>
          باستخدامك لهذا الموقع، فإنك توافق على الشروط والأحكام التالية، ونوصي بقراءتها بعناية.
        </p>

        <h3 style={{ fontWeight: "bold", marginTop: 20 }}>1. المحتوى</h3>
        <p>
          جميع المقالات والمحتويات المنشورة لأغراض التثقيف والمعلومة العامة ولا تُعدّ بديلاً عن الاستشارة الطبية أو المهنية.
        </p>

        <h3 style={{ fontWeight: "bold", marginTop: 20 }}>2. حقوق النشر</h3>
        <p>
          جميع الحقوق محفوظة. لا يجوز نسخ أو إعادة نشر أي محتوى دون إذن كتابي مسبق من إدارة المجلة.
        </p>

        <h3 style={{ fontWeight: "bold", marginTop: 20 }}>3. الخصوصية</h3>
        <p>
          نحترم خصوصيتكم، وأي بيانات يتم جمعها تُستخدم فقط لتحسين تجربة المستخدم، ولن تُشارك مع طرف ثالث.
        </p>

        <h3 style={{ fontWeight: "bold", marginTop: 20 }}>4. التعديلات</h3>
        <p>
          نحتفظ بحق تعديل هذه السياسة في أي وقت، ويُعتبر استمرار استخدام الموقع بعد التعديلات موافقة ضمنية عليها.
        </p>
      </main>

      <Footer />
    </>
  );
}
