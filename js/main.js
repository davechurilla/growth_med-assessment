(() => {
  'use strict';

  // Where the contact form posts to (Formspree, Netlify Forms, your own API, etc.).
  // Leave empty until that is decided; the form will then run in demo mode.
  const FORM_ENDPOINT = '';

  const navMenu = document.getElementById('navMenu');
  const form = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const status = document.getElementById('formStatus');

  // Close the mobile menu after a link is chosen
  navMenu.addEventListener('click', (event) => {
    if (!event.target.closest('a') || !navMenu.classList.contains('show')) return;
    bootstrap.Collapse.getOrCreateInstance(navMenu, { toggle: false }).hide();
  });

  // Contact form: Bootstrap validation, then submit
  const showStatus = (message, type) => {
    status.className = `alert alert-${type} mt-4 mb-0`;
    status.textContent = message;
  };

  const syncInvalidState = () => {
    form.querySelectorAll('input, textarea').forEach((field) => {
      field.setAttribute('aria-invalid', String(!field.checkValidity()));
    });
  };

  form.addEventListener('input', () => {
    if (form.classList.contains('was-validated')) syncInvalidState();
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    status.className = '';
    status.textContent = '';

    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      syncInvalidState();
      form.querySelector(':invalid').focus();
      return;
    }

    if (!FORM_ENDPOINT) {
      console.warn('contactForm: FORM_ENDPOINT is empty, nothing was sent.');
      showStatus('Demo only: the form is not connected to an endpoint yet, so nothing was sent.', 'warning');
      return;
    }

    submitBtn.disabled = true;
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (!response.ok) throw new Error(`Request failed (${response.status})`);

      form.reset();
      form.classList.remove('was-validated');
      form.querySelectorAll('[aria-invalid]').forEach((field) => field.removeAttribute('aria-invalid'));
      showStatus('Thanks, your message was sent.', 'success');
    } catch (error) {
      console.error(error);
      showStatus('Something went wrong and your message was not sent. Please try again.', 'danger');
    } finally {
      submitBtn.disabled = false;
    }
  });

  // Hero text slider (Slick): fade between slides, dots, and a pause control.
  // Autoplay is skipped for visitors who prefer reduced motion.
  const $slider = window.jQuery && window.jQuery('#heroSlider');
  if ($slider && $slider.slick) {
    const pauseBtn = document.getElementById('heroPause');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let paused = reduceMotion;

    $slider.slick({
      fade: true,
      speed: reduceMotion ? 0 : 700,
      autoplay: !reduceMotion,
      autoplaySpeed: 6000,
      pauseOnHover: false,
      pauseOnFocus: false,
      arrows: false,
      dots: true,
      appendDots: '#heroDots',
      customPaging: (slider, i) => window.jQuery('<button type="button">').attr('aria-label', `Show slide ${i + 1}`),
    });

    const syncPauseButton = () => {
      pauseBtn.classList.toggle('is-paused', paused);
      pauseBtn.setAttribute('aria-label', paused ? 'Start slide rotation' : 'Pause slide rotation');
    };
    syncPauseButton();

    pauseBtn.addEventListener('click', () => {
      paused = !paused;
      $slider.slick(paused ? 'slickPause' : 'slickPlay');
      syncPauseButton();
    });

    // A manual change (dots) ends automatic rotation until the visitor restarts it
    document.getElementById('heroDots').addEventListener('click', () => {
      if (!paused) {
        paused = true;
        $slider.slick('slickPause');
        syncPauseButton();
      }
    });
  }
})();
