import { useForm, ValidationError } from '@formspree/react'

import contactDescriptionMonitor from '../assets/Contact Description Frame.svg'
import contactDescriptionMonitorMobile from '../assets/Contact Description Frame Mobile.svg'
import contactFormFrame from '../assets/Contact Form Frame.svg'
import longEnterButton from '../assets/Long Enter Button.svg'

function Contact() {
  const [state, handleSubmit] = useForm('xdekppyv')

  return (
    <main className="bg-[#dedcc4] pt-[2vh] pb-[2vh]">
      {/* ==========================================================
          CONTACT MONITORS
          ========================================================== */}
      <section>
        <div
          className="
            mx-auto
            grid
            w-full
            max-w-[1400px]
            grid-cols-1
            gap-4
            px-4
            sm:px-6
            lg:grid-cols-[0.6677fr_1fr]
            lg:gap-6
          "
        >
          {/* ======================================================
              CONTACT DESCRIPTION MONITOR
              ====================================================== */}
          <div
            className="
              relative
              w-full
              aspect-[448.17/451.37]
              lg:aspect-[448.17/730]
            "
          >
            {/* ====================================================
                CRT SCREEN
                ==================================================== */}
            <div
              className="
                absolute
                left-[4.7%]
                top-[3.4%]
                z-0
                h-[57.8%]
                w-[91.2%]
                overflow-hidden
                bg-[#241b18]
                container-type:inline-size
              "
            >
              <div
                className="
                  flex
                  h-full
                  flex-col
                  px-[7%]
                  py-[6%]
                  text-[#dedcc4]
                "
              >
                <p
                  className="
                    font-rounded
                    text-[clamp(10px,2.8cqw,17px)]
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-[#9c9989]

                    min-[1024px]:text-[clamp(9px,1.8cqw,16px)]
                  "
                >
                  Communication Terminal
                </p>

                <h2
                  className="
                    mt-[3%]
                    font-paroxysm
                    text-[clamp(25px,7cqw,48px)]
                    leading-none
                    tracking-[-0.04em]

                    min-[1024px]:text-[clamp(18px,4.5cqw,48px)]
                  "
                >
                  Let's Connect
                </h2>

                <p
                  className="
                    mt-[5%]
                    max-w-[100%]
                    font-rounded
                    text-[clamp(8px,2.6cqw,30px)]
                    leading-[1.4]
                    text-[#dedcc4]/75

                    min-[1024px]:text-[clamp(10px,2.7cqw,19px)]
                  "
                >
                  Have a project, question, or idea? Whether you're
                  interested in working together, discussing a project,
                  or simply want to get in touch, feel free to reach out!
                </p>
              </div>
            </div>

            {/* ====================================================
                EMAIL / LINKEDIN PHYSICAL BUTTONS
                ==================================================== */}
            <div
              className="
                absolute
                bottom-[4.5%]
                left-[9%]
                right-[9%]
                z-50
                flex
                flex-col
                gap-[1vh]
                max-[1024px]:bottom-[4%]
                max-[1024px]:left-[13%]
                max-[1024px]:right-[13%]
                lg:bottom-[4.5%]
                lg:left-[9%]
                lg:right-[9%]
              "
            >

              {/* ==================================================
                  EMAIL
                  ================================================== */}
              <a
                href="mailto:riley@rileyvanheukelum.com"
                aria-label="Email Riley Van Heukelum"
                className="
                  group
                  relative
                  block
                  w-full
                  cursor-pointer
                "
              >
                {/* Top lip */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    left-[0%]
                    right-[0%]
                    top-[4%]
                    z-10
                    h-[9%]
                    rounded-t-[25%]
                    bg-[#302b27]
                    shadow-[0_2px_3px_rgba(0,0,0,0.45)]
                  "
                  aria-hidden="true"
                />

                {/* ==================================================
                    RECESSED BUTTON WELL
                    ================================================== */}
                <div
                  className="
                    relative
                    w-full
                    overflow-hidden
                    rounded-[2%]
                  "
                >
                  {/* Dark recessed backing */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      left-0
                      right-0
                      top-[5%]
                      bottom-0
                      rounded-[2%]
                      bg-[#241b18]
                    "
                  />

                  {/* Establishes natural button height */}
                  <img
                    src={longEnterButton}
                    alt=""
                    aria-hidden="true"
                    className="
                      invisible
                      block
                      h-auto
                      w-full
                      select-none
                    "
                    draggable="false"
                  />

                  {/* ==================================================
                      MOVING BUTTON FACE
                      ================================================== */}
                  <div
                    className="
                      absolute
                      inset-[4%]
                      z-10
                      transition-transform
                      duration-75
                      ease-out
                      group-active:translate-y-[5%]
                    "
                  >
                    <img
                      src={longEnterButton}
                      alt=""
                      aria-hidden="true"
                      className="
                        block
                        h-auto
                        w-full
                        select-none
                        transition-[filter]
                        duration-150
                        group-hover:brightness-105
                      "
                      draggable="false"
                    />

                    <span
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        flex
                        items-center
                        justify-center
                        gap-[3%]
                        pb-[4%]
                        font-rounded
                        text-[clamp(10px,2vw,17px)]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-[#241b18]
                      "
                    >
                      {/* Email icon */}
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="h-[1.15em] w-[1.15em] shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <rect
                          x="3"
                          y="5"
                          width="18"
                          height="14"
                          rx="1.5"
                        />
                        <path d="m3 7 9 6 9-6" />
                      </svg>

                      Email
                    </span>
                  </div>
                </div>

                {/* ==================================================
                    STATIONARY FRONT PLASTIC LIPS
                    These stay in place while the button face moves.
                    ================================================== */}

                {/* Bottom lip */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    bottom-[-1%]
                    left-[0%]
                    right-[0%]
                    z-20
                    h-[9%]
                    rounded-b-[25%]
                    bg-[#302b27]
                    shadow-[0_-2px_3px_rgba(0,0,0,0.45)]
                  "
                  aria-hidden="true"
                />

                {/* Left lip */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    bottom-[-1%]
                    left-[-1%]
                    top-[4%]
                    z-20
                    w-[4%]
                    rounded-l-[25%]
                    bg-[#302b27]
                    shadow-[2px_0_3px_rgba(0,0,0,0.4)]
                  "
                  aria-hidden="true"
                />

                {/* Right lip */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    bottom-[-1%]
                    right-[-1%]
                    top-[4%]
                    z-20
                    w-[4%]
                    rounded-r-[25%]
                    bg-[#302b27]
                    shadow-[-2px_0_3px_rgba(0,0,0,0.4)]
                  "
                  aria-hidden="true"
                />
              </a>


              {/* ==================================================
                  LINKEDIN
                  ================================================== */}
              <a
                href="https://www.linkedin.com/in/rileyvanheukelum"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Riley Van Heukelum on LinkedIn"
                className="
                  group
                  relative
                  block
                  w-full
                  cursor-pointer
                "
              >
                  {/* Top lip */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      left-[0%]
                      right-[0%]
                      top-[4%]
                      z-10
                      h-[9%]
                      rounded-t-[25%]
                      bg-[#302b27]
                      shadow-[0_2px_3px_rgba(0,0,0,0.45)]
                    "
                    aria-hidden="true"
                  />

                {/* ==================================================
                    RECESSED BUTTON WELL
                    ================================================== */}
                <div
                  className="
                    relative
                    w-full
                    overflow-hidden
                    rounded-[2%]
                  "
                >
                  {/* Dark recessed backing */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      left-0
                      right-0
                      top-[5%]
                      bottom-0
                      rounded-[2%]
                      bg-[#241b18]
                    "
                  />

                  {/* Establishes natural button height */}
                  <img
                    src={longEnterButton}
                    alt=""
                    aria-hidden="true"
                    className="
                      invisible
                      block
                      h-auto
                      w-full
                      select-none
                    "
                    draggable="false"
                  />

                  {/* ==================================================
                      MOVING BUTTON FACE
                      ================================================== */}
                  <div
                    className="
                      absolute
                      inset-[4%]
                      z-10
                      transition-transform
                      duration-75
                      ease-out
                      group-active:translate-y-[5%]
                    "
                  >
                    <img
                      src={longEnterButton}
                      alt=""
                      aria-hidden="true"
                      className="
                        block
                        h-auto
                        w-full
                        select-none
                        transition-[filter]
                        duration-150
                        group-hover:brightness-105
                      "
                      draggable="false"
                    />

                    <span
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        flex
                        items-center
                        justify-center
                        gap-[3%]
                        pb-[4%]
                        font-rounded
                        text-[clamp(10px,2vw,17px)]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-[#241b18]
                      "
                    >
                      {/* LinkedIn icon */}
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="h-[1.15em] w-[1.15em] shrink-0"
                        fill="currentColor"
                      >
                        <path d="M6.5 8.5H3V21h3.5V8.5ZM4.75 3A2.05 2.05 0 1 0 4.75 7.1 2.05 2.05 0 0 0 4.75 3ZM21 13.8c0-3.77-2.01-5.53-4.69-5.53-2.16 0-3.12 1.19-3.66 2.03V8.5H9.15V21h3.5v-7.2c0-1.63.31-3.2 2.32-3.2 1.98 0 2.01 1.86 2.01 3.3V21H21v-7.2Z" />
                      </svg>

                      LinkedIn
                    </span>
                  </div>
                </div>

                {/* ==================================================
                    STATIONARY FRONT PLASTIC LIPS
                    ================================================== */}

                {/* Bottom lip */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    bottom-[-1%]
                    left-[0%]
                    right-[0%]
                    z-20
                    h-[9%]
                    rounded-b-[25%]
                    bg-[#302b27]
                    shadow-[0_-2px_3px_rgba(0,0,0,0.45)]
                  "
                  aria-hidden="true"
                />

                {/* Left lip */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    bottom-[-1%]
                    left-[-1%]
                    top-[4%]
                    z-20
                    w-[4%]
                    rounded-l-[25%]
                    bg-[#302b27]
                    shadow-[2px_0_3px_rgba(0,0,0,0.4)]
                  "
                  aria-hidden="true"
                />

                {/* Right lip */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    bottom-[-1%]
                    right-[-1%]
                    top-[4%]
                    z-20
                    w-[4%]
                    rounded-r-[25%]
                    bg-[#302b27]
                    shadow-[-2px_0_3px_rgba(0,0,0,0.4)]
                  "
                  aria-hidden="true"
                />
              </a>

            </div>

            {/* ====================================================
                DESCRIPTION MONITOR FRAME
                ==================================================== */}
            {/* Mobile description monitor frame */}
            <img
              src={contactDescriptionMonitorMobile}
              alt=""
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-0
                z-30
                block
                h-full
                w-full
                select-none
                lg:hidden
              "
              draggable="false"
            />

            {/* Desktop description monitor frame */}
            <img
              src={contactDescriptionMonitor}
              alt=""
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-0
                z-30
                hidden
                h-full
                w-full
                select-none
                lg:block
              "
              draggable="false"
            />
          </div>

          {/* ======================================================
              CONTACT FORM MONITOR
              ====================================================== */}
          <div
            className="
              relative
              w-full
              aspect-[671.2/730]
              container-type:inline-size
            "
          >
            {/* ====================================================
                FORM
                ==================================================== */}
            <form
              id="contact-form"
              onSubmit={handleSubmit}
              className="
                absolute
                inset-0
                z-20
              "
            >
              {/* ==================================================
                  CRT SCREEN CONTENT
                  ================================================== */}
              <div
                className="
                  absolute
                  left-[3.1%]
                  top-[3.3%]
                  h-[83.4%]
                  w-[94.4%]
                  overflow-hidden
                  bg-[#241b18]
                "
              >
                {state.succeeded ? (
                  /* ================================================
                     SUCCESS SCREEN
                     ================================================ */
                  <div
                    className="
                      flex
                      h-full
                      flex-col
                      items-center
                      justify-center
                      px-[6%]
                      text-center
                      text-[#dedcc4]
                    "
                  >
                    <div
                      className="
                        mb-[3%]
                        font-paroxysm
                        text-[clamp(32px,6cqw,58px)]
                        leading-none
                      "
                    >
                      ✓
                    </div>

                    <h2
                      className="
                        font-paroxysm
                        text-[clamp(28px,5cqw,48px)]
                        leading-none
                        tracking-[-0.04em]
                      "
                    >
                      Message Sent
                    </h2>

                    <p
                      className="
                        mt-[4%]
                        max-w-[70%]
                        font-rounded
                        text-[clamp(10px,1.9cqw,16px)]
                        leading-relaxed
                        text-[#dedcc4]/70
                      "
                    >
                      Thanks for reaching out. I'll get back to you as
                      soon as I can.
                    </p>
                  </div>
                ) : (
                  /* ================================================
                     CONTACT FORM SCREEN
                     ================================================ */
                  <div
                    className="
                      flex
                      h-full
                      flex-col
                      px-[5%]
                      py-[4%]
                      text-[#dedcc4]
                    "
                  >
                    {/* ----------------------------------------------
                        FORM TITLE
                        ---------------------------------------------- */}
                    <div className="mb-[2.5%]">
                      <p
                        className="
                          font-rounded
                          text-[clamp(8px,1.6cqw,13px)]
                          font-bold
                          uppercase
                          tracking-[0.16em]
                          text-[#9c9989]
                        "
                      >
                        Message Interface
                      </p>

                      <h2
                        className="
                          mt-[1%]
                          font-paroxysm
                          text-[clamp(22px,4.5cqw,42px)]
                          leading-none
                          tracking-[-0.04em]
                        "
                      >
                        Send a Message
                      </h2>
                    </div>

                    {/* ----------------------------------------------
                        NAME + EMAIL
                        ---------------------------------------------- */}
                    <div className="grid grid-cols-2 gap-[2.5%]">
                      {/* Name */}
                      <div>
                        <label
                          htmlFor="name"
                          className="
                            mb-[1.5%]
                            block
                            font-rounded
                            text-[clamp(8px,1.5cqw,12px)]
                            font-bold
                            uppercase
                            tracking-[0.1em]
                            text-[#9c9989]
                          "
                        >
                          Name
                        </label>

                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          autoComplete="name"
                          placeholder="Your name"
                          className="
                            h-[clamp(28px,5cqw,43px)]
                            w-full
                            border
                            border-[#9c9989]
                            bg-[#302b27]
                            px-[3%]
                            font-rounded
                            text-[clamp(9px,1.7cqw,14px)]
                            text-[#dedcc4]
                            outline-none
                            placeholder:text-[#9c9989]/70
                            focus:border-[#dedcc4]
                            focus:bg-[#3b342f]
                          "
                        />

                        <ValidationError
                          prefix="Name"
                          field="name"
                          errors={state.errors}
                          className="
                            mt-1
                            font-rounded
                            text-[clamp(7px,1.2cqw,10px)]
                            text-[#d59a8f]
                          "
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          htmlFor="email"
                          className="
                            mb-[1.5%]
                            block
                            font-rounded
                            text-[clamp(8px,1.5cqw,12px)]
                            font-bold
                            uppercase
                            tracking-[0.1em]
                            text-[#9c9989]
                          "
                        >
                          Email
                        </label>

                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          placeholder="you@example.com"
                          className="
                            h-[clamp(28px,5cqw,43px)]
                            w-full
                            border
                            border-[#9c9989]
                            bg-[#302b27]
                            px-[3%]
                            font-rounded
                            text-[clamp(9px,1.7cqw,14px)]
                            text-[#dedcc4]
                            outline-none
                            placeholder:text-[#9c9989]/70
                            focus:border-[#dedcc4]
                            focus:bg-[#3b342f]
                          "
                        />

                        <ValidationError
                          prefix="Email"
                          field="email"
                          errors={state.errors}
                          className="
                            mt-1
                            font-rounded
                            text-[clamp(7px,1.2cqw,10px)]
                            text-[#d59a8f]
                          "
                        />
                      </div>
                    </div>

                    {/* ----------------------------------------------
                        SUBJECT
                        ---------------------------------------------- */}
                    <div className="mt-[2.5%]">
                      <label
                        htmlFor="subject"
                        className="
                          mb-[1.5%]
                          block
                          font-rounded
                          text-[clamp(8px,1.5cqw,12px)]
                          font-bold
                          uppercase
                          tracking-[0.1em]
                          text-[#9c9989]
                        "
                      >
                        Subject
                      </label>

                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        placeholder="What would you like to discuss?"
                        className="
                          h-[clamp(28px,5cqw,43px)]
                          w-full
                          border
                          border-[#9c9989]
                          bg-[#302b27]
                          px-[2%]
                          font-rounded
                          text-[clamp(9px,1.7cqw,14px)]
                          text-[#dedcc4]
                          outline-none
                          placeholder:text-[#9c9989]/70
                          focus:border-[#dedcc4]
                          focus:bg-[#3b342f]
                        "
                      />

                      <ValidationError
                        prefix="Subject"
                        field="subject"
                        errors={state.errors}
                        className="
                          mt-1
                          font-rounded
                          text-[clamp(7px,1.2cqw,10px)]
                          text-[#d59a8f]
                        "
                      />
                    </div>

                    {/* ----------------------------------------------
                        MESSAGE
                        ---------------------------------------------- */}
                    <div className="mt-[2.5%] flex-1">
                      <label
                        htmlFor="message"
                        className="
                          mb-[1.5%]
                          block
                          font-rounded
                          text-[clamp(8px,1.5cqw,12px)]
                          font-bold
                          uppercase
                          tracking-[0.1em]
                          text-[#9c9989]
                        "
                      >
                        Message
                      </label>

                      <textarea
                        id="message"
                        name="message"
                        required
                        placeholder="Tell me about your project or what you'd like to discuss..."
                        className="
                          h-[calc(100%-22px)]
                          min-h-[100px]
                          w-full
                          resize-none
                          border
                          border-[#9c9989]
                          bg-[#302b27]
                          px-[2%]
                          py-[2%]
                          font-rounded
                          text-[clamp(9px,1.7cqw,14px)]
                          leading-relaxed
                          text-[#dedcc4]
                          outline-none
                          placeholder:text-[#9c9989]/70
                          focus:border-[#dedcc4]
                          focus:bg-[#3b342f]
                        "
                      />

                      <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                        className="
                          mt-1
                          font-rounded
                          text-[clamp(7px,1.2cqw,10px)]
                          text-[#d59a8f]
                        "
                      />
                    </div>

                    {/* ----------------------------------------------
                        FORM-LEVEL ERROR
                        ---------------------------------------------- */}
                    <ValidationError
                      errors={state.errors}
                      className="
                        absolute
                        bottom-[4%]
                        right-[5%]
                        max-w-[42%]
                        font-rounded
                        text-right
                        text-[clamp(7px,1.2cqw,10px)]
                        leading-tight
                        text-[#d59a8f]
                      "
                    />
                  </div>
                )}
              </div>
            </form>

            {/* ====================================================
                SEND MESSAGE BUTTON
                ==================================================== */}
            <div className="absolute bottom-[2.5%] left-[3.5%] z-50 w-[50%]">

              {/* Top lip */}
              <div
                className="
                  pointer-events-none
                  absolute
                  left-[-1%]
                  right-[-1%]
                  top-[4%]
                  z-10
                  h-[8%]
                  rounded-t-[35%]
                  bg-[#302b27]
                  shadow-[0_2px_3px_rgba(0,0,0,0.45)]
                "
                aria-hidden="true"
              />

              {/* ==================================================
                  BUTTON SIZE / RECESSED WELL
                  ================================================== */}
              <div
                className="
                  relative
                  w-full
                  overflow-hidden
                  rounded-[2%]
                "
              >
                {/* Dark recessed backing */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    left-0
                    right-0
                    top-[5%]
                    bottom-0
                    rounded-[2%]
                    bg-[#241b18]
                  "
                />

                {/* ==================================================
                    INVISIBLE SIZING IMAGE
                    This establishes the natural height of the button.
                    ================================================== */}
                <img
                  src={longEnterButton}
                  alt=""
                  aria-hidden="true"
                  className="
                    invisible
                    block
                    h-auto
                    w-full
                    select-none
                  "
                  draggable="false"
                />

                {/* ==================================================
                    MOVING BUTTON
                    ================================================== */}
                <button
                  type="submit"
                  form="contact-form"
                  disabled={state.submitting}
                  aria-label="Send message"
                  className="
                    group
                    absolute
                    inset-[4%]
                    z-10
                    block
                    cursor-pointer
                    disabled:cursor-not-allowed
                    disabled:opacity-70
                  "
                >
                  <div
                    className="
                      absolute
                      inset-0
                      transition-transform
                      duration-75
                      ease-out
                      group-active:translate-y-[5%]
                    "
                  >
                    <img
                      src={longEnterButton}
                      alt=""
                      aria-hidden="true"
                      className="
                        block
                        h-auto
                        w-full
                        select-none
                        transition-[filter]
                        duration-150
                        group-hover:brightness-105
                      "
                      draggable="false"
                    />

                    <span
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        flex
                        items-center
                        justify-center
                        pb-[4%]
                        font-rounded
                        text-[clamp(9px,1.8cqw,15px)]
                        font-bold
                        uppercase
                        tracking-[0.08em]
                        text-[#241b18]
                      "
                    >
                      Send Message
                    </span>
                  </div>
                </button>
              </div>

              {/* ==================================================
                  FRONT PLASTIC LIP
                  ================================================== */}

              {/* Bottom lip */}
              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-[-4%]
                  left-[-1%]
                  right-[-1%]
                  z-20
                  h-[8%]
                  rounded-b-[35%]
                  bg-[#302b27]
                  shadow-[0_-2px_3px_rgba(0,0,0,0.45)]
                "
                aria-hidden="true"
              />

              {/* Left lip */}
              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-[-2%]
                  left-[-2%]
                  top-[4%]
                  z-20
                  w-[5%]
                  rounded-l-[35%]
                  bg-[#302b27]
                  shadow-[2px_0_3px_rgba(0,0,0,0.4)]
                "
                aria-hidden="true"
              />

              {/* Right lip */}
              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-[-2%]
                  right-[-2%]
                  top-[4%]
                  z-20
                  w-[5%]
                  rounded-r-[35%]
                  bg-[#302b27]
                  shadow-[-2px_0_3px_rgba(0,0,0,0.4)]
                "
                aria-hidden="true"
              />
            </div>

            {/* ====================================================
                CONTACT FORM MONITOR FRAME
                ==================================================== */}
            <img
              src={contactFormFrame}
              alt=""
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-0
                z-40
                h-full
                w-full
                select-none
              "
              draggable="false"
            />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact