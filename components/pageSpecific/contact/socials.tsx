export const Socials = () => {
  return (
    <>
      <h2>Socials</h2>
      <div className='flex flex-col'>
        <p>Get in touch with me here</p>
        <SocialsList />
      </div>
    </>
  );
};

const SocialsList = () => {
  return (
    <>
      <div>Linkedin</div>
      <div>Github</div>
    </>
  );
};
