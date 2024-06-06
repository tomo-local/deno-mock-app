export default function Navigation() {
  return (
    <nav class="w-full bg-white sticky top-0 z-10 shadow-lg">
      <div class="item-center flex justify-between max-w-5xl mx-6 py-2">
        <div class="flex items-center">
          <h2 class="text-3xl font-semibold">
            <a href="/pokemon/list" class="text-gray-800">
              ポケモン図鑑
            </a>
          </h2>
        </div>
      </div>
    </nav>
  );
}
