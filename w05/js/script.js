// products array (source of truth)
const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

// Populate product select with options (value = id, visible = name)
(function populateProductSelect(){
  const select = document.getElementById('product');
  if(!select) return;
  // Clear any existing dynamic options (keep placeholder)
  // Append options from products array
  products.forEach(p => {
    const opt = document.createElement('option');
    opt.value = p.id;        // rubric: value is id
    opt.textContent = p.name;
    select.appendChild(opt);
  });
})();

// Optional: add simple client-side enhancement: show avg rating for chosen product (a11y friendly)
(function attachProductInfo(){
  const select = document.getElementById('product');
  if(!select) return;
  const info = document.createElement('p');
  info.id = 'product-info';
  info.style.marginTop = '.5rem';
  info.style.color = 'var(--muted)';
  select.after(info);
  function update(){
    const id = select.value;
    const p = products.find(x => x.id === id);
    info.textContent = p ? `Average rating: ${p.averagerating} / 5` : '';
  }
  select.addEventListener('change', update);
  update();
})();

// Ensure keyboard tab order is logical: DOM order matches visual order (we used that by default)

// Optional light validation indicator for required fields (visual clue)
(function requiredClue(){
  const requiredEls = document.querySelectorAll('#product-review-form [required]');
  requiredEls.forEach(el => {
    // Add aria-required where appropriate
    el.setAttribute('aria-required', 'true');
  });

  // Prevent submission if invalid and focus first invalid
  const form = document.getElementById('product-review-form');
  if(!form) return;
  form.addEventListener('submit', function(e){
    if(!form.checkValidity()){
      e.preventDefault();
      // find first invalid element and focus
      const firstInvalid = form.querySelector(':invalid');
      if(firstInvalid) firstInvalid.focus();
    }
    // else let GET submit to review.html
  });
})();
