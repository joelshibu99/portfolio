// tabs handling: top tabbar controls which right-side section is visible
document.addEventListener('DOMContentLoaded', ()=> {
  const tabs = document.querySelectorAll('.tabbar .tab');
  const sections = document.querySelectorAll('.panel-section');

  // helper: deactivate all
  function deactivateAll(){
    tabs.forEach(t => t.classList.remove('active'));
    sections.forEach(s => s.classList.remove('active'));
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', ()=> {
      const target = tab.dataset.target;
      const section = document.getElementById(target);
      if(!section) return;
      deactivateAll();
      tab.classList.add('active');
      section.classList.add('active');

      // scroll the panel to top when switching
      const panel = document.getElementById('panel');
      if(panel) panel.scrollTo({top:0, behavior:'smooth'});
    });
  });

  // open "about" on load
  const hash = location.hash.replace('#','');
  if(hash){
    const initial = Array.from(tabs).find(t => t.dataset.target === hash);
    if(initial) initial.click();
  } else {
    // ensure first tab active
    tabs[0].click();
  }
});
