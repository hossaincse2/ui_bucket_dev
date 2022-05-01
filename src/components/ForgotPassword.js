import Link from "next/link";

export default function ForgotPassword() {
  return (
    <>
      <section className="max-w-2xl mx-auto mb-10">
        <div className="bg-white px-16 py-12 shadow-xl rounded-xl">
          <div className="pass-top text-center">
            <h2 className="text-2xl font-bold mb-4">Forgot Password?</h2>
            <p className="mb-3">
              Enter the email address you used when you joined and we’ll send
              you instructions to reset your password.
            </p>
            <p>
              For security reasons, we do NOT store your password. So rest
              assured that we will never send your password via email.
            </p>
          </div>
          <div className="form mt-10">
            <form>
              <label htmlFor="email" className="text-base mb-2 inline-block">
                Email Address
              </label>
              <input
                type="text"
                placeholder="Enter your email"
                className="min-w-full h-16 border-1 border-gray rounded-[10px] px-6 mb-6 bg-lightblueTwo focus:outline-none"
              />
              <Link href="/" passHref>
                <a className="bg-blue  rounded-[10px] py-4 text-white font-bold text-base2 inline-block min-w-full text-center">
                  Send Reset Instructions
                </a>
              </Link>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
