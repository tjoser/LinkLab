import QFORM from "../../components/Form";

const ContactPage = () => {
  return (
    <div className="py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      <section>
        <h2 className="text-2xl font-semibold">Get in Touch</h2>
        <p className="text-lg text-gray-700">
          If you have any questions, partnership opportunities, or general inquiries, please reach out to us using the form below.
        </p>
      </section>
      <QFORM />
    </div>
  );
};

export default ContactPage;
