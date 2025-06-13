const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');
const closeLoginModal = document.getElementById('closeLoginModal');
const closeRegisterModal = document.getElementById('closeRegisterModal');
const switchToRegister = document.getElementById('switchToRegister');
const switchToLogin = document.getElementById('switchToLogin');
const userMenu = document.getElementById('userMenu');
const logoutBtn = document.getElementById('logoutBtn');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

// Mobile Menu Toggle
mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Sample book data
const books = [
    {
        id: 1,
        title: 'Dune (1965)',
        author: 'Frank Herbert',
        publisher: 'Ace Books',
        description: 'Câu chuyện khoa học viễn tưởng về một hành tinh sa mạc.',
        image: 'a1/1.jpg',
        genres: ['international', 'fantasy'],
    },
    {
        id: 2,
        title: '1984 (1949)',
        author: 'George Orwell',
        publisher: 'Penguin',
        description: 'Cuốn sách tiểu thuyết phản địa đàng về sự giám sát.',
        image: 'a1/2.jpg',
        genres: ['international', 'novel'],
    },
    {
        id: 3,
        title: 'Pride and Prejudice (1813)',
        author: 'Jane Austen',
        publisher: 'T. Egerton',
        description: 'Tiểu thuyết lãng mạn kinh điển.',
        image: 'a1/3.jpg',
        genres: ['international', 'novel'],
    },
    {
        id: 4,
        title: 'The Hobbit (1937)',
        author: 'J.R.R. Tolkien',
        publisher: 'Allen & Unwin',
        description: 'Cuộc phiêu lưu của Bilbo Baggins, chuyến đi đầy nguy hiểm để giành lại kho báu từ con rồng Smaug.',
        image: 'a1/4.jpg',
        genres: ['international', 'fantasy'],
    },
    {
        id: 5,
        title: 'Sapiens (2011)',
        author: 'Yuval Noah Harari',
        publisher: 'Harper',
        description: 'Bộ tiểu thuyết kể lại lịch sử loài người từ thời tiền sử đến hiện đại.',
        image: 'a1/5.jpg',
        genres: ['international', 'history'],
    },
    {
        id: 6,
        title: 'To Kill a Mockingbird (1960)',
        author: 'Harper Lee',
        publisher: 'J.B. Lippincott',
        description: 'Cuốn sách công lý và phân biệt chủng tộc qua mắt một đứa trẻ.',
        image: 'a1/6.jpg',
        genres: ['international', 'novel'],
    },
    {
        id: 7,
        title: 'The Catcher in the Rye (1951)',
        author: 'J.D. Salinger',
        publisher: 'Little, Brown',
        description: 'Câu chuyện về tuổi trẻ nổi loạn và nỗi cô đơn giữa đời thường.',
        image: 'a1/7.png',
        genres: ['international', 'novel'],
    },
    {
        id: 8,
        title: 'Brave New World (1932)',
        author: 'Aldous Huxley',
        publisher: 'Chatto & Windus',
        description: 'Câu chuyện về thế giới hạnh phúc giả tạo dưới lớp vỏ công nghệ và trật tự.',
        image: 'a1/8.jpg',
        genres: ['international', 'novel'],
    },
    {
        id: 9,
        title: 'The Great Gatsby (1925)',
        author: 'F. Scott Fitzgerald',
        publisher: 'Scribner',
        description: 'Jay Gatsby theo đuổi giấc mơ và tình yêu giữa hào nhoáng và giả dối.',
        image: 'a2/9.jpg',
        genres: ['international', 'novel'],
    },
    {
        id: 10,
        title: 'Lord of the Rings (1954)',
        author: 'J.R.R. Tolkien',
        publisher: 'Allen & Unwin',
        description: 'Cuộc chiến giữa thiện và ác xoay quanh một chiếc nhẫn quyền lực.',
        image: 'a2/10.jpg',
        genres: ['international', 'fantasy'],
    },
    {
        id: 11,
        title: 'The Alchemist (1988)',
        author: 'Paulo Coelho',
        publisher: 'HarperCollins',
        description: 'Hành trình tìm kho báu dẫn đến khám phá bản thân.',
        image: 'a2/11.jpg',
        genres: ['international', 'self-help'],
    },
    {
        id: 12,
        title: 'Harry Potter (1997)',
        author: 'J.K. Rowling',
        publisher: 'Bloomsbury',
        description: 'Cậu bé phù thủy Harry Potter chiến đấu chống lại chúa tể hắc ám Voldemort.',
        image: 'a2/12.jpg',
        genres: ['international', 'fantasy'],
    },
    {
        id: 13,
        title: 'Educated (2018)',
        author: 'Tara Westover',
        publisher: 'Random House',
        description: 'Hành trình từ vô học đến học giả của một cô gái vùng núi Idaho.',
        image: 'a2/13.jpg',
        genres: ['international'],
    },
    {
        id: 14,
        title: 'The Da Vinci Code (2003)',
        author: 'Dan Brown',
        publisher: 'Doubleday',
        description: 'Mật mã, âm mưu và cuộc săn lùng sự thật tôn giáo.',
        image: 'a2/14.jpg',
        genres: ['international', 'novel'],
    },
    {
        id: 15,
        title: 'Becoming (2018)',
        author: 'Michelle Obama',
        publisher: 'Crown',
        description: 'Hành trình từ cô bé Chicago trở thành Đệ nhất Phu nhân nước Mỹ.',
        image: 'a2/15.jpg',
        genres: ['international'],
    },
    {
        id: 16,
        title: 'Tôi Thấy Hoa Vàng Trên Cỏ Xanh (2010)',
        author: 'Nguyễn Nhật Ánh',
        publisher: 'NXB Trẻ',
        description: 'Ký ức tuổi thơ êm đềm giữa làng quê và những giấc mơ trong sáng.',
        image: 'a2/16.jpg',
        genres: ['vietnamese', 'novel'],
    },
    {
        id: 17,
        title: 'Tuổi Trẻ Đáng Giá Bao Nhiêu (2012)',
        author: 'Rosie Nguyễn',
        publisher: 'NXB Hội Nhà Văn',
        description: 'Lời nhắn gửi sâu sắc về học tập, trải nghiệm và sống hết mình khi còn trẻ.',
        image: 'a3/17.jpg',
        genres: ['vietnamese', 'self-help'],
    },
    {
        id: 18,
        title: 'Mắt Biếc (1990)',
        author: 'Nguyễn Nhật Ánh',
        publisher: 'NXB Trẻ',
        description: 'Tình yêu thầm lặng gắn với tuổi thơ và đôi mắt biếc.',
        image: 'a3/18.jpg',
        genres: ['vietnamese', 'novel'],
    },
    {
        id: 19,
        title: 'Đất Rừng Phương Nam (1957)',
        author: 'Đoàn Giỏi',
        publisher: 'NXB Kim Đồng',
        description: 'Hành trình phiêu lưu của bé An giữa vùng sông nước Nam Bộ.',
        image: 'a3/19.jpg',
        genres: ['vietnamese', 'novel'],
    },
    {
        id: 20,
        title: 'The Psychology of Money (2020)',
        author: 'Morgan Housel',
        publisher: 'Harriman House',
        description: 'Những bài học sâu sắc về cách con người nghĩ, cảm và hành xử với tiền bạc.',
        image: 'a3/20.jpg',
        genres: ['international', 'self-help'],
    },
    {
        id: 21,
        title: 'The Silence of the Lambs (1988)',
        author: 'Thomas Harris',
        publisher: "St. Martin's Press",
        description: 'Trí tuệ đối đầu tội ác trong cuộc săn lùng kẻ giết người.',
        image: 'a3/21.png',
        genres: ['international', 'novel'],
    },
    {
        id: 22,
        title: 'Think and Grow Rich (1937)',
        author: 'Napoleon Hill',
        publisher: 'The Ralston Society',
        description: 'Nguyên tắc tư duy giúp đạt thành công và giàu có bền vững.',
        image: 'a3/22.jpg',
        genres: ['international', 'self-help'],
    },
    {
        id: 23,
        title: 'One Piece (1997)',
        author: 'Eiichiro Oda',
        publisher: 'Shueisha',
        description: 'Hành trình chinh phục biển cả và giấc mơ trở thành Vua Hải Tặc.',
        image: 'a3/23.jpg',
        genres: ['international', 'fantasy'],
    },
    {
        id: 24,
        title: 'Naruto (1999)',
        author: 'Masashi Kishimoto',
        publisher: 'Shueisha',
        description: 'Hành trình trưởng thành và khẳng định bản thân của một ninja bị ghét bỏ.',
        image: 'a3/24.jpg',
        genres: ['international', 'fantasy'],
    },
    {
        id: 25,
        title: 'Dragon Ball (1984)',
        author: 'Akira Toriyama',
        publisher: 'Shueisha',
        description: 'Goku phiêu lưu tìm ngọc rồng và bảo vệ Trái Đất khỏi các thế lực hủy diệt.',
        image: 'a4/25.jpg',
        genres: ['international', 'fantasy'],
    },
    {
        id: 26,
        title: 'Demon Slayer (2016)',
        author: 'Koyoharu Gotouge',
        publisher: 'Shueisha',
        description: 'Hành trình diệt quỷ và bảo vệ người thân bằng ý chí và lòng nhân hậu.',
        image: 'a4/26.jpg',
        genres: ['international', 'fantasy'],
    },
    {
        id: 27,
        title: 'Attack on Titan (2009)',
        author: 'Hajime Isayama',
        publisher: 'Kodansha',
        description: 'Cuộc chiến sinh tồn giữa con người và Titan với sự thật chấn động phía sau.',
        image: 'a4/27.jpg',
        genres: ['international', 'fantasy'],
    },
    {
        id: 28,
        title: 'Death Note (2003)',
        author: 'Tsugumi Ohba',
        publisher: 'Shueisha',
        description: 'Light Yagami dùng sổ tử thần để tiêu diệt tội phạm và đối đầu thiên tài L.',
        image: 'a4/28.jpg',
        genres: ['international', 'fantasy'],
    },
    {
        id: 29,
        title: 'Bleach (2001)',
        author: 'Tite Kubo',
        publisher: 'Shueisha',
        description: 'Ichigo trở thành Thần Chết thay thế và chiến đấu bảo vệ linh hồn khỏi Hollow.',
        image: 'a4/29.jpg',
        genres: ['international', 'fantasy'],
    },
    {
        id: 30,
        title: 'Tokyo Ghoul (2011)',
        author: 'Sui Ishida',
        publisher: 'Shueisha',
        description: 'Kaneki biến thành bán Ghoul sau tai nạn và phải sống giữa hai thế giới đối lập.',
        image: 'a4/30.jpg',
        genres: ['international', 'fantasy'],
    },
    {
        id: 31,
        title: 'Detective Conan (1994)',
        author: 'Gosho Aoyama',
        publisher: 'Shogakukan',
        description: 'Thám tử nhí Conan phá án để truy tìm tổ chức đã biến mình thành đứa trẻ.',
        image: 'a4/31.jpg',
        genres: ['international', 'novel'],
    },
    {
        id: 32,
        title: 'Berserk (1989)',
        author: 'Kentaro Miura',
        publisher: 'Hakusensha',
        description: 'Guts chiến đấu chống lại số phận, quỷ dữ và quá khứ đầy bi kịch.',
        image: 'a4/32.jpg',
        genres: ['international', 'fantasy'],
    },
    {
        id: 33,
        title: 'Man’s Search for Meaning (1946)',
        author: 'Viktor E. Frankl',
        publisher: 'Beacon Press',
        description: 'Hành trình tìm ý nghĩa cuộc sống qua trải nghiệm trong trại tập trung.',
        image: 'a5/33.jpg',
        genres: ['international', 'self-help'],
    },
    {
        id: 34,
        title: 'Lịch Sử Thế Giới (1960)',
        author: 'Nguyễn Hiến Lê',
        publisher: 'NXB Tổng Hợp TP.HCM',
        description: 'Tóm lược các sự kiện, nền văn minh và biến động đã định hình lịch sử loài người.',
        image: 'a5/34.jpg',
        genres: ['vietnamese', 'history'],
    },
    {
        id: 35,
        title: 'Lịch Sử Việt Nam (2017)',
        author: 'Viện Sử học Việt Nam',
        publisher: 'NXB Khoa Học Xã Hội',
        description: 'Khái quát quá trình hình thành, đấu tranh và phát triển của dân tộc Việt Nam.',
        image: 'a5/35.jpg',
        genres: ['vietnamese', 'history'],
    },
    {
        id: 36,
        title: 'The Universe in a Nutshell (2001)',
        author: 'Stephen Hawking',
        publisher: 'Bantam Books',
        description: 'Hành trình giải mã bản chất vũ trụ qua tư duy của Stephen Hawking.',
        image: 'a5/36.png',
        genres: ['international', 'science'],
    },
    {
        id: 37,
        title: 'The Grand Design (2010)',
        author: 'Stephen Hawking',
        publisher: 'Bantam Books',
        description: 'Giải thích sự hình thành vũ trụ qua lăng kính khoa học hiện đại.',
        image: 'a5/37.jpg',
        genres: ['international', 'science'],
    },
    {
        id: 38,
        title: 'Thinking, Fast and Slow (2011)',
        author: 'Daniel Kahneman',
        publisher: 'Farrar, Straus and Giroux',
        description: 'Khám phá cách bộ não đưa ra quyết định và dễ mắc sai lầm.',
        image: 'a5/38.jpg',
        genres: ['international', 'science'],
    },
    {
        id: 39,
        title: 'The Power of Now (1997)',
        author: 'Eckhart Tolle',
        publisher: 'New World Library',
        description: 'Hướng dẫn sống trọn vẹn trong hiện tại để tìm sự bình an nội tâm.',
        image: 'a5/39.jpg',
        genres: ['international', 'self-help'],
    },
    {
        id: 40,
        title: 'Atomic Habits (2018)',
        author: 'James Clear',
        publisher: 'Avery',
        description: 'Hướng dẫn xây dựng thói quen nhỏ để tạo ra thay đổi lớn và bền vững.',
        image: 'a5/40.jpg',
        genres: ['international', 'self-help'],
    }
];

// Sample reviews data
let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
let userActions = JSON.parse(localStorage.getItem('userActions')) || {};

// Check if user is logged in
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
if (currentUser) {
    loginBtn.classList.add('hidden');
    registerBtn.classList.add('hidden');
    userMenu.classList.remove('hidden');
    document.querySelector('.user-greeting').textContent = `Xin chào, ${currentUser.name}`;
}

// Load saved login credentials
const savedCredentials = JSON.parse(localStorage.getItem('savedCredentials')) || null;
if (savedCredentials && document.getElementById('loginEmail')) {
    document.getElementById('loginEmail').value = savedCredentials.email;
    document.getElementById('loginPassword').value = savedCredentials.password;
    document.getElementById('rememberMe').checked = true;
}

// Modal Toggle
loginBtn.addEventListener('click', () => {
    loginModal.classList.remove('hidden');
});

registerBtn.addEventListener('click', () => {
    registerModal.classList.remove('hidden');
});

closeLoginModal.addEventListener('click', () => {
    loginModal.classList.add('hidden');
    clearErrors();
});

closeRegisterModal.addEventListener('click', () => {
    registerModal.classList.add('hidden');
    clearErrors();
});

switchToRegister.addEventListener('click', () => {
    loginModal.classList.add('hidden');
    registerModal.classList.remove('hidden');
    clearErrors();
});

switchToLogin.addEventListener('click', () => {
    registerModal.classList.add('hidden');
    loginModal.classList.remove('hidden');
    clearErrors();
});

// Clear error messages
function clearErrors() {
    document.querySelectorAll('.error-message').forEach(error => error.classList.add('hidden'));
}

// Login Form Submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const rememberMe = document.getElementById('rememberMe').checked;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email);

    if (!user) {
        document.getElementById('loginEmailError').classList.remove('hidden');
        return;
    }

    if (user.password !== password) {
        document.getElementById('loginPasswordError').classList.remove('hidden');
        return;
    }

    currentUser = { email: user.email, name: user.name };
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    if (rememberMe) {
        localStorage.setItem('savedCredentials', JSON.stringify({ email, password }));
    } else {
        localStorage.removeItem('savedCredentials');
    }

    loginModal.classList.add('hidden');
    loginBtn.classList.add('hidden');
    registerBtn.classList.add('hidden');
    userMenu.classList.remove('hidden');
    document.querySelector('.user-greeting').textContent = `Xin chào, ${currentUser.name}`;
    clearErrors();

    // Update review form visibility
    if (document.getElementById('reviewFormSection')) {
        document.getElementById('reviewFormSection').classList.remove('hidden');
    }
});

// Register Form Submission
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('registerName')?.value || '';
    const email = document.getElementById('registerEmail')?.value || '';
    const password = document.getElementById('registerPassword')?.value || '';
    const confirmPassword = document.getElementById('registerConfirmPassword')?.value || '';

    let hasError = false;
    clearErrors();

    const nameError = document.getElementById('registerNameError');
    const emailError = document.getElementById('registerEmailError');
    const passwordError = document.getElementById('registerPasswordError');
    const confirmPasswordError = document.getElementById('registerConfirmPasswordError');

    if (!name) {
        if (nameError) nameError.classList.remove('hidden');
        hasError = true;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.find(u => u.email === email)) {
        if (emailError) emailError.classList.remove('hidden');
        hasError = true;
    }

    if (password.length < 6) {
        if (passwordError) passwordError.classList.remove('hidden');
        hasError = true;
    }

    if (password !== confirmPassword) {
        if (confirmPasswordError) confirmPasswordError.classList.remove('hidden');
        hasError = true;
    }

    if (hasError) return;

    users.push({ email, password, name });
    localStorage.setItem('users', JSON.stringify(users));
    currentUser = { email, name };
    localStorage.setItem('currentUser', JSON.stringify(currentUser));

    if (registerModal) registerModal.classList.add('hidden');
    if (loginBtn) loginBtn.classList.add('hidden');
    if (registerBtn) registerBtn.classList.add('hidden');
    if (userMenu) userMenu.classList.remove('hidden');
    const greeting = document.querySelector('.user-greeting');
    if (greeting) greeting.textContent = `Xin chào, ${currentUser.name}`;

    const reviewFormSection = document.getElementById('reviewFormSection');
    if (reviewFormSection) {
        reviewFormSection.classList.remove('hidden');
    }
});

// Logout
logoutBtn.addEventListener('click', () => {
    currentUser = null;
    localStorage.removeItem('currentUser');
    userMenu.classList.add('hidden');
    loginBtn.classList.remove('hidden');
    registerBtn.classList.remove('hidden');
    if (document.getElementById('reviewFormSection')) {
        document.getElementById('reviewFormSection').classList.add('hidden');
    }
});

// Function to create a book card element
function createBookCard(book) {
    const bookReviews = reviews.filter(r => r.bookId === book.id);
    const averageRating = bookReviews.length > 0
        ? (bookReviews.reduce((sum, r) => sum + r.rating, 0) / bookReviews.length).toFixed(1)
        : book.rating || 0;

    const card = document.createElement('div');
    card.className = 'book-card';
    card.dataset.bookId = book.id;
    card.dataset.genre = book.genres.join(',');

    card.innerHTML = `
        <img src="${book.image}" alt="${book.title}" class="book-image">
        <div class="book-content">
            <h3 class="book-title">${book.title}</h3>
            <p class="book-author">Tác giả: ${book.author}</p>
            <p class="book-publisher-author">Nhà xuất bản: ${book.publisher}</p>
            <div class="rating-stars" data-book-id="${book.id}">
                ${'<i class="fas fa-star"></i>'.repeat(Math.floor(averageRating))}
                ${averageRating % 1 !== 0 ? '<i class="fas fa-star-half-alt"></i>' : ''}
                <span class="rating-score">${averageRating}</span>
            </div>
            <p class="book-description">${book.description}</p>
            <div class="book-actions">
                <button class="btn-view-reviews" data-book-id="${book.id}">Xem đánh giá</button>
                <button class="btn-save">
                    <i class="fas fa-bookmark"></i> Lưu
                </button>
            </div>
        </div>
    `;
    return card;
}

// Genre Filter
const genreFilters = document.querySelectorAll('.genre-filter');
const bookGrid = document.getElementById('bookGrid');
const pagination = document.querySelector('.pagination');

genreFilters.forEach(filter => {
    filter.addEventListener('click', () => {
        // Remove active class from all filters
        genreFilters.forEach(f => f.classList.remove('active'));
        filter.classList.add('active');

        const selectedGenre = filter.dataset.genre;

        // Clear current books in grid
        bookGrid.innerHTML = '';

        // Filter books
        let filteredBooks;
        if (selectedGenre === 'all') {
            // Determine current page
            const currentPage = parseInt(document.querySelector('.pagination-btn.active')?.textContent || '1');
            const booksPerPage = 8;
            const startIndex = (currentPage - 1);
            const endIndex = currentPage * booksPerPage;
            filteredBooks = books.slice(startIndex, endIndex);
            pagination.classList.remove('hidden');
        } else {
            filteredBooks = books.filter(book => book.genres.includes(selectedGenre));
            pagination.classList.add('hidden');
        }

        // Render filtered books
        if (filteredBooks.length === 0) {
            bookGrid.innerHTML = '<p class="text-center col-span-4">Không tìm thấy sách phù hợp.</p>';
        } else {
            filteredBooks.forEach(book => {
                const bookCard = createBookCard(book);
                bookGrid.appendChild(bookCard);
            });
        }

        // Rebind view review buttons
        bookGrid.querySelectorAll('.btn-view-reviews').forEach(button => {
            button.addEventListener('click', () => {
                const bookId = button.dataset.bookId;
                if (bookId) {
                    window.location.href = `book-review.html?bookId=${bookId}`;
                }
            });
        });

        // Rebind bookmark buttons
        bookGrid.querySelectorAll('.btn-save').forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                if (!currentUser) {
                    loginModal.classList.remove('hidden');
                    return;
                }

                const icon = button.querySelector('i');
                if (icon.classList.contains('fa-bookmark')) {
                    icon.classList.remove('fa-bookmark');
                    icon.classList.add('fa-check');
                    button.innerHTML = '<i class="fas fa-check mr-1"></i> Đã lưu';
                    button.classList.remove('bg-blue-600', 'hover:bg-blue-700');
                    button.classList.add('bg-green-500', 'hover:bg-green-600');
                } else {
                    icon.classList.remove('fa-check');
                    icon.classList.add('fa-bookmark');
                    button.innerHTML = '<i class="fas fa-bookmark mr-1"></i> Lưu';
                    button.classList.remove('bg-green-500', 'hover:bg-green-600');
                    button.classList.add('bg-blue-600', 'hover:bg-blue-700');
                }
            });
        });
    });
});

// Bookmark Button
const bookmarkButtons = document.querySelectorAll('.btn-save');
bookmarkButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        if (!currentUser) {
            loginModal.classList.remove('hidden');
            return;
        }

        const icon = button.querySelector('i');
        if (icon.classList.contains('fa-bookmark')) {
            icon.classList.remove('fa-bookmark');
            icon.classList.add('fa-check');
            button.innerHTML = '<i class="fas fa-check mr-1"></i> Đã lưu';
            button.classList.remove('bg-blue-600', 'hover:bg-blue-700');
            button.classList.add('bg-green-500', 'hover:bg-green-600');
        } else {
            icon.classList.remove('fa-check');
            icon.classList.add('fa-bookmark');
            button.innerHTML = '<i class="fas fa-bookmark mr-1"></i> Lưu';
            button.classList.remove('bg-green-500', 'hover:bg-green-600');
            button.classList.add('bg-blue-600', 'hover:bg-blue-700');
        }
    });
});

// Update book ratings
function updateBookRatings() {
    if (bookGrid) {
        books.forEach(book => {
            const bookCard = bookGrid.querySelector(`.book-card[data-book-id="${book.id}"]`);
            if (bookCard) {
                const ratingStars = bookCard.querySelector('.rating-stars');
                const bookReviews = reviews.filter(r => r.bookId === book.id);
                const averageRating = bookReviews.length > 0
                    ? (bookReviews.reduce((sum, r) => sum + r.rating, 0) / bookReviews.length).toFixed(1)
                    : book.rating || 0;
                ratingStars.innerHTML = `
                    ${'<i class="fas fa-star"></i>'.repeat(Math.floor(averageRating))}
                    ${averageRating % 1 !== 0 ? '<i class="fas fa-star-half-alt"></i>' : ''}
                    <span class="rating-score">${averageRating}</span>
                `;
            }
        });
    }
}

// View Reviews
const viewReviewButtons = document.querySelectorAll('.btn-view-reviews');
viewReviewButtons.forEach(button => {
    button.addEventListener('click', () => {
        const bookId = button.dataset.bookId;
        if (bookId) {
            window.location.href = `book-review.html?bookId=${bookId}`;
            console.log('Navigating to book-review.html with bookId:', bookId);
        } else {
            console.error('No bookId found on view review button');
        }
    });
});

// Book Review Page Logic
if (window.location.pathname.includes('book-review.html')) {
    console.log('Processing book-review.html');
    const urlParams = new URLSearchParams(window.location.search);
    const bookId = urlParams.get('bookId');
    
    console.log('bookId from URL:', bookId);
    if (bookId) {
        const book = books.find(b => b.id === parseInt(bookId));
        if (book) {
            const bookInfo = document.getElementById('bookInfo');
            if (bookInfo) {
                const bookReviews = reviews.filter(r => r.bookId === parseInt(bookId));
                const averageRating = bookReviews.length > 0
                    ? (bookReviews.reduce((sum, r) => sum + r.rating, 0) / bookReviews.length).toFixed(1)
                    : book.rating || 0;

                bookInfo.innerHTML = `
                    <img src="${book.image}" alt="${book.title}" class="book-detail-image">
                    <div class="book-detail-info">
                        <h2 class="book-detail-title">${book.title}</h2>
                        <p class="book-detail-author">Tác giả: ${book.author}</p>
                        <p class="book-detail-publisher">Nhà xuất bản: ${book.publisher}</p>
                        <div class="rating-stars">
                            ${'<i class="fas fa-star"></i>'.repeat(Math.floor(averageRating))}
                            ${averageRating % 1 !== 0 ? '<i class="fas fa-star-half-alt"></i>' : ''}
                            <span class="rating-score">${averageRating}</span>
                        </div>
                        <p class="book-detail-description">${book.description}</p>
                    </div>
                `;

                // Display reviews
                const reviewList = document.getElementById('reviewList');
                if (reviewList) {
                    reviewList.innerHTML = bookReviews.length > 0 ? bookReviews.map((review, index) => `
                        <div class="review-item" data-review-id="${index}">
                            <div class="review-item-header">
                                <span class="review-item-user">${review.user}</span>
                                <span class="review-item-date">${review.date}</span>
                            </div>
                            <div class="review-item-rating">
                                ${'<i class="fas fa-star"></i>'.repeat(review.rating)}
                            </div>
                            <p class="review-item-comment">${review.comment}</p>
                            <div class="review-item-actions">
                                ${currentUser && review.user === currentUser.name ? `
                                    <button class="btn-delete-review" data-review-id="${index}">
                                        <i class="fas fa-trash"></i> Xóa
                                    </button>
                                ` : ''}
                                <button class="btn-like" data-review-id="${index}">
                                    <i class="fas fa-thumbs-up"></i> Like (<span class="like-count">${review.likes || 0}</span>)
                                </button>
                                <button class="btn-dislike" data-review-id="${index}">
                                    <i class="fas fa-thumbs-down"></i> Dislike (<span class="dislike-count">${review.dislikes || 0}</span>)
                                </button>
                            </div>
                        </div>
                    </div>
                `).join('') : '<p>Chưa có đánh giá nào.</p>';
                }

                // Delete Review
                document.querySelectorAll('.btn-delete-review').forEach(button => {
                    button.addEventListener('click', () => {
                        const reviewId = button.dataset.reviewId;
                        if (currentUser && reviews[reviewId] && reviews[reviewId].user === currentUser.name) {
                            reviews.splice(reviewId, 1);
                            localStorage.setItem('reviews', JSON.stringify(reviews));
                            window.location.reload();
                        } else {
                            console.log('Cannot delete: User mismatch or review not found');
                        }
                    });
                });

                // Like/Dislike Review with Toggle
                document.querySelectorAll('.btn-like, .btn-dislike').forEach(button => {
                    button.addEventListener('click', () => {
                        if (!currentUser) {
                            loginModal.classList.remove('hidden');
                            return;
                        }
                        const reviewId = button.dataset.reviewId;
                        const review = reviews[reviewId];
                        const isLike = button.classList.contains('btn-like');
                        const actionKey = `${currentUser.email}-${isLike ? 'like' : 'dislike'}-${reviewId}`;
                        const countElement = button.querySelector(isLike ? '.like-count' : '.dislike-count');
                        const currentCount = parseInt(countElement.textContent) || 0;

                        if (userActions[actionKey]) {
                            // Hủy like/dislike
                            if (isLike) {
                                review.likes = Math.max(0, review.likes - 1);
                            } else {
                                review.dislikes = Math.max(0, review.dislikes - 1);
                            }
                            delete userActions[actionKey];
                            countElement.textContent = Math.max(0, currentCount - 1);
                            button.disabled = false;
                        } else {
                            // Thêm like/dislike
                            if (isLike) {
                                review.likes = (review.likes || 0) + 1;
                            } else {
                                review.dislikes = (review.dislikes || 0) + 1;
                            }
                            userActions[actionKey] = true;
                            countElement.textContent = currentCount + 1;
                            button.disabled = true;
                        }

                        localStorage.setItem('userActions', JSON.stringify(userActions));
                        localStorage.setItem('reviews', JSON.stringify(reviews));
                    });
                });

                // Review Form Submission
                const reviewForm = document.getElementById('reviewForm');
                if (reviewForm) {
                    reviewForm.addEventListener('submit', (e) => {
                        e.preventDefault();
                        if (!currentUser) {
                            loginModal.classList.remove('hidden');
                            return;
                        }

                        const rating = document.getElementById('rating').value;
                        const comment = document.getElementById('comment').value;
                        const date = new Date().toLocaleDateString('vi-VN');

                        reviews.push({
                            bookId: parseInt(bookId),
                            user: currentUser.name,
                            rating: parseInt(rating),
                            comment,
                            date,
                            likes: 0,
                            dislikes: 0
                        });

                        localStorage.setItem('reviews', JSON.stringify(reviews));
                        window.location.reload();
                    });
                }

                // Show review form if logged in
                if (currentUser && document.getElementById('reviewFormSection')) {
                    document.getElementById('reviewFormSection').classList.remove('hidden');
                }
            } else {
                console.error('Element with ID "bookInfo" not found.');
            }
        } else {
            console.error(`Book with ID ${bookId} not found in books array.`);
        }
    } else {
        console.error('No bookId parameter found in URL.');
    }
}

// Update ratings on page load
updateBookRatings();