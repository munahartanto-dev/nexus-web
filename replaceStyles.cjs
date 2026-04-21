const fs = require('fs');
const path = require('path');

function walkSync(dir, filelist = []) {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      walkSync(filePath, filelist);
    } else if (filePath.endsWith('.jsx')) {
      filelist.push(filePath);
    }
  });
  return filelist;
}

const files = walkSync('./src');

const replacements = [
  { from: /#1E3A5F/g, to: '#4A154B' },
  { from: /#6B4FBB/g, to: '#611F69' },
  { from: /#1A1A2E/g, to: '#1D1C1D' },
  { from: /#F8F9FC/g, to: '#FAF9F5' },
  { from: /#64748B/g, to: '#454245' },
  { from: /#E2E8F0/g, to: '#F4F4F4' },
  { from: /#abc4e6/g, to: '#F9EDFF' },
  { from: /#BEE3F8/g, to: '#F9EDFF' },
  { from: /#583ca3/g, to: '#730394' }, // Hover on purple
  { from: /#4a3399/g, to: '#730394' }, // Hover on purple
  { from: /#152a45/g, to: '#2E0039' }, // Hover on navy
  { from: /#F3F0FF/g, to: '#F9EDFF' },
  // Slack Button Adjustments
  { from: /rounded-full/g, to: 'rounded' },
  // Transform primary button padding and text constraints
  { from: /px-8 py-4/g, to: 'px-[40px] py-[19px] uppercase tracking-[0.8px] text-[14px]' },
  { from: /px-8 py-3/g, to: 'px-[40px] py-[19px] uppercase tracking-[0.8px] text-[14px]' },
  { from: /px-6 py-2.5/g, to: 'px-[16px] py-[12px] uppercase tracking-[0.8px] text-[14px]' },
  { from: /px-6 py-3/g, to: 'px-[16px] py-[12px] uppercase tracking-[0.8px] text-[14px]' },
  // Card radius adjustment
  { from: /rounded-2xl/g, to: 'rounded-2xl' }
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let newContent = content;
  replacements.forEach(r => {
    newContent = newContent.replace(r.from, r.to);
  });
  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
  }
});

console.log('Colors and class properties replaced successfully.');
