import Link from "next/link";
import { BusinessNews } from "@/components/Company/BusinessNews";
import { Banner } from "@/components/ui/banner";
import { CardTitle } from "@/components/ui/card";

const HelpHeader = () => {
  return (
    <div className="min-h-screen w-full">
      <div className="flex h-fit flex-col justify-around gap-4 rounded-md bg-gradient-to-b from-gray-100 to-gray-300/80 p-6">
        <p>Business News, Economic current affairs, articles</p>
        <div className="my-2 border border-zinc-300"></div>
        <CardTitle>Help</CardTitle>
        <ul className="mt-2 space-y-4">
          <li>
            <h2 className="font-bold">
              What should I do if my company&apos;s information on the
              xyz-company.com website is inaccurate?
            </h2>
            <ul className="list-disc px-10 py-4">
              <li className="text-base">
                Update the company information{" "}
                <Link
                  className="text-blue-800 transition hover:underline"
                  href="#"
                >
                  after registering
                </Link>{" "}
                on the XYZ website. Updating and supplementing information is
                free of charge. You can also send revised data{" "}
                <Link
                  className="text-blue-800 transition hover:underline"
                  href="#"
                >
                  by e-mail.
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <h2 className="font-bold">How to update company information?</h2>
            <ol className="list-decimal px-10 py-4">
              <li className="text-base">
                <Link
                  className="text-blue-800 transition hover:underline"
                  href="#"
                >
                  Register
                </Link>{" "}
                on the xyz-company.com website
              </li>
              <li className="text-base">Log in to the site</li>
              <li className="text-base">Find your company in the search</li>
              <li className="text-base">
                Click &quot;Update company information&quot;
              </li>
              <li className="text-base">
                Update company details, description, upload logo and click
                &quot;Save&quot;
              </li>
              <li className="text-base">
                After verification by the administrator, your company
                information will be updated.
              </li>
              <li className="text-base">
                The update presentation is available at{" "}
                <Link
                  className="text-blue-800 transition hover:underline"
                  href="#"
                >
                  https://rekvizitai.vz.lt/docs/prezentacija/
                </Link>
              </li>
            </ol>
          </li>
          <li>
            <h2 className="font-bold">How to update company information?</h2>
            <ul className="list-disc px-10 py-4">
              <li className="text-base">
                Company income information is automatically updated twice a
                year. If you want to update the information faster, send the
                company&apos;s profit-loss report with a printout and signature
                to the address
                <span className="ml-1 bg-white px-1">
                  pardavimai@rekvizitai.It
                </span>
              </li>
            </ul>
          </li>
          <li>
            <h2 className="font-bold">How to enter a new company?</h2>
            <ol className="list-decimal px-10 py-4">
              <li className="text-base">
                <Link
                  className="text-blue-800 transition hover:underline"
                  href="#"
                >
                  Register
                </Link>{" "}
                on the xyz-company.com website
              </li>
              <li className="text-base">Log in to the site</li>
              <li className="text-base">Find your company in the search</li>
              <li className="text-base">
                In the search, make sure that there really is no such company on
                the site
              </li>
              <li className="text-base">
                In the top menu of the website, click &quot;New company&quot;
              </li>
              <li className="text-base">
                Fill in the details of the company, attach the logo and click
                &quot;Save&quot;
              </li>
              <li className="text-base">
                After admin review, your company will be approved.
              </li>
            </ol>
          </li>
          <li>
            <h2 className="font-bold">
              How long is the data stored and how can I delete the data I have
              entered?
            </h2>
            <ul className="list-disc px-10 py-4">
              <li className="text-base">
                Company data is stored as long as it is current and accurate or
                until it is deleted by the user. You can delete the entered data
                by logging in to your account or by notifying the administrator
                <Link
                  className="ml-1 text-blue-800 transition hover:underline"
                  href="#"
                >
                  by e-mail.
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <h2 className="font-bold">Why are some companies listed above?</h2>
            <ul className="list-disc px-10 py-4">
              <li className="text-base">
                Companies are listed above that have a logo and full
                description, more detailed other details or have purchased
                priority. If you want to promote your company, give it priority,
                contact the
                <Link
                  className="ml-1 text-blue-800 transition hover:underline"
                  href="#"
                >
                  advertising department.
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <h2 className="font-bold">
              Why is the location of the company marked incorrectly on the map?
            </h2>
            <ul className="list-disc px-10 py-4">
              <li className="text-base">
                If the location of the business is shown incorrectly on the map,
                please correct the address of the business. If the address is
                correct, but the location is still marked incorrectly on the
                map, report this
                <Link
                  className="ml-1 text-blue-800 transition hover:underline"
                  href="#"
                >
                  to the administrator.
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <h2 className="font-bold">
              How to unsubscribe from email letters from xyz visitors?
            </h2>
            <ul className="list-disc px-10 py-4">
              <li className="text-base">
                You need to delete the email e-mail address from the xyz portal.
                You can do this by updating your company information. How to
                update company details is explained above.
              </li>
            </ul>
          </li>
          <li>
            <h2 className="font-bold">
              What does &quot;No company assigned to you&quot; mean?
            </h2>
            <ul className="list-disc px-10 py-4">
              <li className="text-base">
                Companies are assigned to users who submit update data or enter
                a new company. If you want the company to be assigned to you,
                update its details (see above) or
                <Link
                  className="mx-1 text-blue-800 transition hover:underline"
                  href="#"
                >
                  enter a new company
                </Link>
                and wait for administrator approval.
              </li>
            </ul>
          </li>
          <li>
            <h2 className="font-bold">
              How long does it take to confirm the information sent?
            </h2>
            <ul className="list-disc px-10 py-4">
              <li className="text-base">
                Information is usually confirmed within a day, but it can take
                up to a week. If the data sent is incorrect, inaccurate, it is
                not confirmed. If you are sure that you have provided correct
                information, but it has not been verified for more than a week,
                please notify
                <Link
                  className="ml-1 text-blue-800 transition hover:underline"
                  href="#"
                >
                  an administrator.
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <h2 className="font-bold">
              How to delete a company in the directory?
            </h2>
            <ul className="list-disc px-10 py-4">
              <li className="text-base">
                Companies are not removed from the register. Only irrelevant or
                incorrect information can be removed.
              </li>
            </ul>
          </li>
          <li>
            <h2 className="font-bold">
              How many areas of activity can a company specify?
            </h2>
            <ul className="list-disc px-10 py-4">
              <li className="text-base">
                A company is allowed to assign up to 4 areas of activity. If
                your company&apos;s activities cover more areas of activity -
                choose four main ones. To assig more activities, please contact
                the
                <Link
                  className="ml-1 text-blue-800 transition hover:underline"
                  href="#"
                >
                  advertising department.
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <h2 className="font-bold">
              How to specify the exact location on the map?
            </h2>
            <ul className="list-disc px-10 py-4">
              <li className="text-base">
                If you want to specify the location of your company on the map
                very precisely, during the update, enter the coordinates of the
                location in the &quot;Notes to administrator&quot; field. You
                can get coordinates using Google Maps or maps.lt.
              </li>
            </ul>
          </li>
          <li>
            <h2 className="font-bold">
              How do I delete a comment posted on my company?
            </h2>
            <ul className="list-disc px-10 py-4">
              <li className="text-base">
                Comments will not be removed without reason. The rules for
                removing comments are presented here:
                <Link
                  className="ml-1 text-blue-800 transition hover:underline"
                  href="#"
                >
                  https://xyz-company.com.lt/taisykles/
                </Link>
                If there is acomment that does not comply with the rules, report
                it here.
              </li>
            </ul>
          </li>
          <li>
            <h2 className="font-bold">Where are the rules of XYZ?</h2>
            <ul className="list-disc px-10 py-4">
              <li className="text-base">
                The rules of XYZ are presented at
                <Link
                  className="ml-1 text-blue-800 transition hover:underline"
                  href="#"
                >
                  https://xyz-company.com.lt/taisykles
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <h2 className="font-bold">
              Where is the portal&apos;s privacy policy?
            </h2>
            <ul className="list-disc px-10 py-4">
              <li className="text-base">
                The privacy policy of XYZ.lt is available at
                <Link
                  className="ml-1 text-blue-800 transition hover:underline"
                  href="#"
                >
                  https://xyz-company.com.lt/privatumo-politika
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <h2 className="font-bold">I have an unanswered question</h2>
          </li>
          <ul className="list-disc px-10 py-4">
            <li className="text-base">
              If you have an unanswered question, ask
              <Link
                className="ml-1 text-blue-800 transition hover:underline"
                href="#"
              >
                an administrator.
              </Link>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default HelpHeader;
