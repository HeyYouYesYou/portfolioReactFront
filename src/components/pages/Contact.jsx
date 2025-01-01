import { useLoaderData } from "react-router-dom";

import { Title } from "../templates/Title";
import { Subtitle } from "../templates/Subtitle";
import { PageCard } from "../templates/PageCard";
import { BasedStileCard } from "../templates/BasedStileCard";
import { SubmitForm } from "../templates/SubmitForm";

export default function Contact() {
  const pageData = useLoaderData();

  const socialLinks = pageData.data.socialLinks.map((link, i) => {
    return (
      <li
        key={link.label}
        className="opacity-0 animate-flyIn"
        style={{ "--delay": i * 0.35 + "s" }}
      >
        <a href={link.url} target="_blank">
          <img
            className="w-16 md:w-16 m-2 svgGrayscale"
            src={`https://api.andyepik.pro${link.logo.url}`}
            alt={`https://api.andyepik.pro${link.logo.alternativeText}`}
          />
        </a>
      </li>
    );
  });

  const tel = pageData.data.address.tel;
  const formattedTelNumber =
    tel.slice(0, 3) +
    "-" +
    tel.slice(3, 6) +
    "-" +
    tel.slice(6, 9) +
    "-" +
    tel.slice(9);

  return (
    <PageCard>
      <BasedStileCard>
        <Title>{pageData.data.title}</Title>

        <section className="my-8">
          <Subtitle>Social media:</Subtitle>
          <ul className="pt-2 sm:pl-8 flex flex-wrap sm:justify-start justify-center">
            {socialLinks}
          </ul>
        </section>

        <section className="sm:flex justify-between ">
          <address className="p-4 rounded-sm animate-fadeIn opacity-0">
            <a
              title={pageData.data.address.googleMaps.label}
              target="_blank"
              href={pageData.data.address.googleMaps.url}
            >
              <div className="px-4 py-2  hover:shadow-2xl shadow-LimeGray">
                <Subtitle>Address: </Subtitle>
                <p className="mt-2">
                  {pageData.data.address.Country}
                  {", "}
                  {pageData.data.address.district}
                </p>
                <p>
                  {pageData.data.address.city}
                  {", "}
                  {pageData.data.address.postIndex}
                </p>
                <p>
                  {pageData.data.address.street} {pageData.data.address.build}
                </p>
              </div>
            </a>
            <p className="px-4  my-8 hover:shadow-xl shadow-LimeGray">
              <a href={`tel:${pageData.data.address.tel}`}>
                {formattedTelNumber}
              </a>
            </p>
          </address>
          <SubmitForm />
        </section>
      </BasedStileCard>
    </PageCard>
  );
}
